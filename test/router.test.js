const supertest = require('supertest');

const { StatusCodes } = require('../src/libs/constants');
const server = require('../src/server');

beforeAll(() => {
   jest.setTimeout(1000);
});

describe('Health check..', () => {
   it('should return OK for GET /api/health-check', (done) => {
      supertest(server)
         .get('/api/health-check')
         .end((err, res) => {
            expect(res.status).toBe(StatusCodes.OK);
            expect(res.text).toBe('OK');
            done();
         });
   });

   it('should return OK for POST /api/health-check', (done) => {
      supertest(server)
         .post('/api/health-check')
         .end((err, res) => {
            expect(res.status).toBe(StatusCodes.NotFound);
            done();
         });
   });
})
