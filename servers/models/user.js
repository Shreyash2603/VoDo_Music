const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: String,
  musicType: String,
  details: String,
  profileImage: String,
});

module.exports = mongoose.model('User', UserSchema);
