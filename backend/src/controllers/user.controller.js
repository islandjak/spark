const User = require('../models/user');

const updateProfile = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    const user = req.user;

    // Update user
    await user.update({
      firstName,
      lastName,
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = req.user;

    // Validate current password
    const isValidPassword = await user.validatePassword(currentPassword);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    next(error);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const user = req.user;

    // Soft delete - set isActive to false
    await user.update({ isActive: false });

    res.json({ message: 'Account deactivated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateProfile,
  changePassword,
  deleteAccount,
}; 