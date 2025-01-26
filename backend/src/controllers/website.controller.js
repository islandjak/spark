const Website = require('../models/website');

// Create a new website
const createWebsite = async (req, res, next) => {
  try {
    const { name, url, description } = req.body;
    const website = await Website.create({
      name,
      url,
      description,
      userId: req.user.id,
    });

    res.status(201).json({ website });
  } catch (error) {
    next(error);
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