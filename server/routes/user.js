const express = require('express');
const {
  saveUser,
  findFriends,
  searchUsers,
  softDeleteUser,
  updateUser,
  sortUsers,
} = require('../controllers/userController');

const router = express.Router();

router.post('/:username', saveUser);
router.post('/:username/friends', findFriends);
router.get('/search', searchUsers);
router.delete('/:username', softDeleteUser);
router.patch('/:username', updateUser);
router.get('/sort', sortUsers);

module.exports = router;


// app.post('/api/users/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//       const existingUser = await User.findOne({ username, isDeleted: false });
//       if (existingUser) return res.status(200).json(existingUser);
  
//       const { data } = await axios.get(`https://api.github.com/users/${username}`);
//       const newUser = new User(data);
//       await newUser.save();
//       res.status(201).json(newUser);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  


//   app.post('/api/users/:username/friends', async (req, res) => {
//     const { username } = req.params;
//     try {
//       const user = await User.findOne({ username });
//       if (!user) return res.status(404).json({ error: 'User not found' });
  
//       const followers = user.followers; // Assume an array of usernames
//       const following = user.following; // Assume an array of usernames
//       const mutuals = followers.filter(f => following.includes(f));
  
//       user.friends = mutuals;
//       await user.save();
  
//       res.status(200).json({ friends: mutuals });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   app.get('/api/search', async (req, res) => {
//     const { username, location } = req.query;
//     try {
//       const query = { isDeleted: false };
//       if (username) query.username = new RegExp(username, 'i');
//       if (location) query.location = new RegExp(location, 'i');
  
//       const users = await User.find(query);
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   app.delete('/api/users/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//       const user = await User.findOneAndUpdate(
//         { username },
//         { isDeleted: true },
//         { new: true }
//       );
//       if (!user) return res.status(404).json({ error: 'User not found' });
  
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   app.patch('/api/users/:username', async (req, res) => {
//     const { username } = req.params;
//     const updates = req.body;
//     try {
//       const user = await User.findOneAndUpdate(
//         { username },
//         updates,
//         { new: true }
//       );
//       if (!user) return res.status(404).json({ error: 'User not found' });
  
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   app.get('/api/users/sort', async (req, res) => {
//     const { sortBy = 'followers' } = req.query;
//     try {
//       const users = await User.find({ isDeleted: false }).sort({ [sortBy]: -1 });
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  