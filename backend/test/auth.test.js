const { User } = require('../src/models');
const { expect } = require('chai');
const { describe, it, before, after } = require('mocha');

describe('Auth API', () => {
  let testUser;
  const userCredentials = {
    email: 'test@test.com',
    password: 'password123',
    firstName: 'Test',
    lastName: 'User'
  };

  // Clean up before tests
  before(async () => {
    await User.destroy({ where: { email: userCredentials.email } });
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const res = await request
        .post('/api/auth/register')
        .send(userCredentials)
        .expect(201);

      expect(res.body).to.have.property('token');
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('email', userCredentials.email);
      expect(res.body.user).to.not.have.property('password');

      testUser = res.body.user;
    });

    it('should not register a user with existing email', async () => {
      const res = await request
        .post('/api/auth/register')
        .send(userCredentials)
        .expect(400);

      expect(res.body).to.have.property('error');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login with valid credentials', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({
          email: userCredentials.email,
          password: userCredentials.password
        })
        .expect(200);

      expect(res.body).to.have.property('token');
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('email', userCredentials.email);
      expect(res.body.user).to.not.have.property('password');
    });

    it('should not login with invalid password', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({
          email: userCredentials.email,
          password: 'wrongpassword'
        })
        .expect(401);

      expect(res.body).to.have.property('error');
    });

    it('should not login with non-existent email', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@test.com',
          password: userCredentials.password
        })
        .expect(401);

      expect(res.body).to.have.property('error');
    });
  });

  describe('GET /api/auth/profile', () => {
    let authToken;

    before(async () => {
      const res = await request
        .post('/api/auth/login')
        .send({
          email: userCredentials.email,
          password: userCredentials.password
        });
      authToken = res.body.token;
    });

    it('should get user profile with valid token', async () => {
      const res = await request
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('email', userCredentials.email);
      expect(res.body.user).to.not.have.property('password');
    });

    it('should not get profile without token', async () => {
      await request
        .get('/api/auth/profile')
        .expect(401);
    });

    it('should not get profile with invalid token', async () => {
      await request
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);
    });
  });

  // Clean up after tests
  after(async () => {
    await User.destroy({ where: { email: userCredentials.email } });
  });
}); 