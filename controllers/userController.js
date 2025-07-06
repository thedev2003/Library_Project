const User = require('../models/users'); // Adjust path if needed

// GET /api/users (list all users)
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// GET /api/users/:id (get user by ID)
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id, '-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// POST /api/users/signup
exports.signup = async (req, res, next) => {
  try {
    // Implement your signup logic (hash password, validate, etc.)
    const existing = await User.findOne({ email: req.body.email });
    if (existing) return res.status(400).json({ message: "Email already used" });

    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Signup successful", user });
  } catch (err) {
    next(err);
  }
};

// POST /api/users/login
exports.login = async (req, res, next) => {
  try {
    // Implement your login logic (check password, issue token, etc.)
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    // Add your password check here
    // if (!user.comparePassword(req.body.password)) ...
    res.json({ message: "Login successful", user });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id (update user info)
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, select: '-password' });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};