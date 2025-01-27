const { User, Website } = require('../src/models');
const { expect } = require('chai');
const { describe, it, before, after } = require('mocha');

describe('Website API', () => {
  let authToken;
  let testUser;
  const userCredentials = {
    email: 'websitetest@test.com',
    password: 'password123',
    firstName: 'Test',
    lastName: 'User'
  };

  const testWebsite = {
    name: 'Test Website',
    url: 'https://test.com',
    description: 'A test website'
  };

  // Set up test user and get auth token
  before(async () => {
    // Clean up any existing test user
    await User.destroy({ where: { email: userCredentials.email } });

    // Create test user
    const res = await request
      .post('/api/auth/register')
      .send(userCredentials);

    authToken = res.body.token;
    testUser = res.body.user;
  });

  describe('POST /api/websites', () => {
    it('should create a new website', async () => {
      const res = await request
        .post('/api/websites')
        .set('Authorization', `Bearer ${authToken}`)
        .send(testWebsite)
        .expect(201)
        .then((res) => {
          expect(res.body).to.have.property('website');
          expect(res.body.website).to.have.property('id');
          expect(res.body.website).to.have.property('name', testWebsite.name);
          expect(res.body.website).to.have.property('url', testWebsite.url);
          expect(res.body.website).to.have.property('description', testWebsite.description);
        });
    });

    it('should not create website without authentication', async () => {
      await request
        .post('/api/websites')
        .send(testWebsite)
        .expect(401);
    });

    it('should not create website with invalid URL', async () => {
      const res = await request
        .post('/api/websites')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ ...testWebsite, url: 'invalid-url' })
        .expect(400);

      expect(res.body).to.have.property('error');
    });
  });

  describe('GET /api/websites', () => {
    it('should get all user websites', async () => {
      const res = await request
        .get('/api/websites')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(res.body).to.have.property('websites');
      expect(res.body.websites).to.be.an('array');
      expect(res.body.websites[0]).to.have.property('name', testWebsite.name);
    });

    it('should not get websites without authentication', async () => {
      await request
        .get('/api/websites')
        .expect(401);
    });
  });

  describe('GET /api/websites/:id', () => {
    let websiteId;

    before(async () => {
      const website = await Website.findOne({
        where: { userId: testUser.id }
      });
      websiteId = website.id;
    });

    it('should get a specific website', async () => {
      const res = await request
        .get(`/api/websites/${websiteId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(res.body).to.have.property('website');
      expect(res.body.website).to.have.property('id', websiteId);
      expect(res.body.website).to.have.property('name', testWebsite.name);
    });

    it('should not get website of another user', async () => {
      // Create another user and try to access the first user's website
      const otherUser = await request
        .post('/api/auth/register')
        .send({
          email: 'other@test.com',
          password: 'password123',
          firstName: 'Other',
          lastName: 'User'
        });

      await request
        .get(`/api/websites/${websiteId}`)
        .set('Authorization', `Bearer ${otherUser.body.token}`)
        .expect(404);

      // Clean up other user
      await User.destroy({ where: { email: 'other@test.com' } });
    });
  });

  describe('PUT /api/websites/:id', () => {
    let websiteId;

    before(async () => {
      const website = await Website.findOne({
        where: { userId: testUser.id }
      });
      websiteId = website.id;
    });

    it('should update a website', async () => {
      const updates = {
        name: 'Updated Website',
        description: 'Updated description'
      };

      const res = await request
        .put(`/api/websites/${websiteId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updates)
        .expect(200);

      expect(res.body).to.have.property('website');
      expect(res.body.website).to.have.property('name', updates.name);
      expect(res.body.website).to.have.property('description', updates.description);
    });

    it('should not update website without authentication', async () => {
      await request
        .put(`/api/websites/${websiteId}`)
        .send({ name: 'Unauthorized Update' })
        .expect(401);
    });
  });

  describe('DELETE /api/websites/:id', () => {
    let websiteId;

    before(async () => {
      const website = await Website.findOne({
        where: { userId: testUser.id }
      });
      websiteId = website.id;
    });

    it('should delete (soft delete) a website', async () => {
      await request
        .delete(`/api/websites/${websiteId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      // Verify the website is soft deleted
      const website = await Website.findOne({
        where: { id: websiteId }
      });
      expect(website.isActive).to.be.false;
    });

    it('should not delete website without authentication', async () => {
      await request
        .delete(`/api/websites/${websiteId}`)
        .expect(401);
    });
  });

  // Clean up after all tests
  after(async () => {
    await Website.destroy({ where: { userId: testUser.id } });
    await User.destroy({ where: { email: userCredentials.email } });
  });
}); 