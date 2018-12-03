const supertest = require('supertest');

const server = require('../src/server');


describe('Health check..', () => {
   it('should return OK for GET /api/health-check', (done) => {
      supertest(server)
         .get('/api/health-check')
         .end((err, res) => {
            expect(res.status).toBe(200);
            expect(res.text).toBe('OK');
            done();
         });
   })

   it('should return OK for POST /api/health-check', (done) => {
      supertest(server)
         .post('/api/health-check')
         .end((err, res) => {
            expect(res.status).toBe(404);
            done();
         });
   })
})
