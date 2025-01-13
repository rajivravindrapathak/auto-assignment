const User = require('../models/user');
const { fetchGitHubUser } = require('../utils/apiClient');

// Save GitHub User to DB
exports.saveUser = async (req, res) => {
  const { username } = req.params;

  try {
    let user = await User.findOne({ username, isDeleted: false });

    if (user) return res.status(200).json(user);

    const githubData = await fetchGitHubUser(username);

    user = new User({
      username: githubData.login,
      name: githubData.name,
      avatar_url: githubData.avatar_url,
      location: githubData.location,
      bio: githubData.bio,
      blog: githubData.blog,
      public_repos: githubData.public_repos,
      public_gists: githubData.public_gists,
      followers: githubData.followers,
      following: githubData.following,
      created_at: githubData.created_at,
      updated_at: githubData.updated_at,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find Mutual Followers
exports.findFriends = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username, isDeleted: false });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const mutuals = user.followers.filter(follower => user.following.includes(follower));

    user.friends = mutuals;
    await user.save();

    res.status(200).json({ friends: mutuals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search Users
exports.searchUsers = async (req, res) => {
  const { username, location } = req.query;

  try {
    const query = { isDeleted: false };
    if (username) query.username = new RegExp(username, 'i');
    if (location) query.location = new RegExp(location, 'i');

    const users = await User.find(query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft Delete User
exports.softDeleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { isDeleted: true },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const { username } = req.params;
  const updates = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      updates,
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Sort Users
exports.sortUsers = async (req, res) => {
  const { sortBy = 'followers' } = req.query;

  try {
    const users = await User.find({ isDeleted: false }).sort({ [sortBy]: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
