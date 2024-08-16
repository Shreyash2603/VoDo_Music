// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// }

// module.exports = {
//   authenticateToken,
// };

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const router = express.Router();

// // Signup Route
// router.post('/signup', async (req, res) => {
//   const { name, email, password, gender, musicType, details } = req.body;

//   try {
//     // Check if the user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'Email already in use' });
//     }

//     // Create a new user instance
//     user = new User({
//       name,
//       email,
//       password,
//       gender,
//       musicType,
//       details,
//     });

//     // Hash the password before saving it to the database
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     // Save the user to the database
//     await user.save();

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
//       expiresIn: 3600, // Token expires in 1 hour
//     });

//     // Send the token in the response
//     res.json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Email not registered' });
//     }

//     // Check if the provided password matches the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
//       expiresIn: 3600, // Token expires in 1 hour
//     });

//     // Send the token in the response
//     res.json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Check if email is registered
// router.post('/check-email', async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.json({ exists: true });
//     } else {
//       return res.json({ exists: false });
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;