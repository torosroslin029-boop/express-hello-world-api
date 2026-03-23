const request = require('supertest');
const app = require('../server');

describe('Express Hello World API', () => {
  describe('GET /', () => {
    it('should return Hello World message', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.body).toEqual({
        message: 'Hello World!'
      });
    });

    it('should return JSON content type', async () => {
      await request(app)
        .get('/')
        .expect('Content-Type', /json/);
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for undefined routes', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);
      
      expect(response.body).toHaveProperty('error', 'Not Found');
      expect(response.body.message).toContain('Route GET /nonexistent not found');
    });
  });
});