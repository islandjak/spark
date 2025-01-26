const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./user');

class Website extends Model {}

Website.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Website',
    timestamps: true,
  }
);

// Define association
Website.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Website, { foreignKey: 'userId' });

module.exports = Website; 