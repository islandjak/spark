const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const {
  createWebsite,
  getWebsites,
  getWebsite,
  updateWebsite,
  deleteWebsite,
} = require('../controllers/website.controller');

// All website routes require authentication
router.use(authenticate);

// Website routes
router.post('/', createWebsite);
router.get('/', getWebsites);
router.get('/:id', getWebsite);
router.put('/:id', updateWebsite);
router.delete('/:id', deleteWebsite);

module.exports = router; 