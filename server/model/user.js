// server/model/user.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: String,
  avatar_url: String,
  location: String,
  bio: String,
  blog: String,
  public_repos: Number,
  public_gists: Number,
  followers: Number,
  following: Number,
  created_at: Date,
  updated_at: Date,
  friends: [String], // List of mutual followers
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);
