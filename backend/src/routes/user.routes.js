const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const {
  updateProfile,
  changePassword,
  deleteAccount,
} = require('../controllers/user.controller');

// Protected user routes
router.use(authenticate);

router.put('/profile', updateProfile);
router.put('/password', changePassword);
router.delete('/account', deleteAccount);

module.exports = router; 