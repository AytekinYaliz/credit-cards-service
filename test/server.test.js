const supertest = require('supertest');

const server = require('../src/server');


describe('Health check..', () => {
   it('should return OK for /health-check', (done) => {
      supertest(server)
         .get('/health-check')
         .end((err, res) => {
            expect(res.status).toBe(200);
            expect(res.text).toBe('OK');
            done();
         });
   })
})
