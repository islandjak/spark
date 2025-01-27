const { expect } = require('chai');
const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/utils/database');

global.expect = expect;
global.request = supertest(app);

// Export setup and teardown functions
module.exports = {
  mochaHooks: {
    beforeAll: async () => {
      try {
        await sequelize.authenticate();
        console.log('Database connected for tests.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
      }
    },
    afterAll: async () => {
      await sequelize.close();
      console.log('Database connection closed.');
    }
  }
}; 