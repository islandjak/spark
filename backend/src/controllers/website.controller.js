const { Website } = require('../models');

// Create a new website
const createWebsite = async (req, res) => {
  try {
    const { name, url, description } = req.body;
    const userId = req.user.id;

    // URL validation
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(url)) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    const website = await Website.create({
      name,
      url,
      description,
      userId
    });

    res.status(201).json({ website });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all websites for the authenticated user
const getWebsites = async (req, res, next) => {
  try {
    const websites = await Website.findAll({
      where: {
        userId: req.user.id,
        isActive: true,
      },
      order: [['createdAt', 'DESC']],
    });

    res.json({ websites });
  } catch (error) {
    next(error);
  }
};

// Get a specific website
const getWebsite = async (req, res, next) => {
  try {
    const website = await Website.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
        isActive: true,
      },
    });

    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }

    res.json({ website });
  } catch (error) {
    next(error);
  }
};

// Update a website
const updateWebsite = async (req, res, next) => {
  try {
    const { name, url, description } = req.body;
    const website = await Website.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
        isActive: true,
      },
    });

    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }

    await website.update({
      name,
      url,
      description,
    });

    res.json({ website });
  } catch (error) {
    next(error);
  }
};

// Delete a website (soft delete)
const deleteWebsite = async (req, res, next) => {
  try {
    const website = await Website.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
        isActive: true,
      },
    });

    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }

    await website.update({ isActive: false });
    res.json({ message: 'Website deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWebsite,
  getWebsites,
  getWebsite,
  updateWebsite,
  deleteWebsite,
}; 