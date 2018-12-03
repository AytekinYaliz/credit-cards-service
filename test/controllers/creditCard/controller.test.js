const supertest = require('supertest');

const { HttpStatus } = require('../../../src/libs/constants');
const server = require('../../../src/server');


beforeAll((done) => {
   jest.setTimeout(1000);
   done();
});

describe('CreditCard Controller', () => {
   it('should return array of Credit Cards for GET /api/creditCards', (done) => {
      supertest(server)
         .get('/api/creditCards')
         .end((err, res) => {
            expect(res.status).toBe(HttpStatus.OK);
            done();
         });
   })
})
