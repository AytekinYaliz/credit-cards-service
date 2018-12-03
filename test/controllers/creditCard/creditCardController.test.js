const supertest = require('supertest');

const { StatusCodes } = require('../../../src/libs/constants');
const server = require('../../../src/server');
const mockCreditCard = require('./mockCreditcard');

beforeAll((done) => {
   jest.setTimeout(1000);
   done();
});

describe('CreditCard Controller', () => {
   it('should return array of Credit Cards for GET /api/creditCards', (done) => {
      supertest(server)
         .get('/api/creditCards')
         .end((err, res) => {
            expect(res.status).toBe(StatusCodes.OK);
            expect(res.body.data).not.toBeNull();
            expect(res.body.data).not.toBeUndefined();
            expect(Array.isArray(res.body.data)).toBe(true);
            expect(typeof res.body.data).toBe('object');
            done();
         });
   });

   it('should return 400 w/ empty name for POST /api/creditCards', (done) => {
      supertest(server)
         .post('/api/creditCards')
         .send(mockCreditCard.creditCardWithEmptyName)
         .end((err, res) => {
            expect(res.status).toBe(StatusCodes.BadRequest);
            expect(res.body.data[0].msg).toBe('Name is required!');
            done();
         });
   });

   it('should return 400 w/ empty card number for POST /api/creditCards', (done) => {
      supertest(server)
         .post('/api/creditCards')
         .send(mockCreditCard.creditCardWithEmptyNumber)
         .end((err, res) => {
            expect(res.status).toBe(StatusCodes.BadRequest);
            expect(res.body.data[0].msg).toBe('Invalid value');
            expect(res.body.data[1].msg).toBe('Wrong format!');
            done();
         });
   });
})
