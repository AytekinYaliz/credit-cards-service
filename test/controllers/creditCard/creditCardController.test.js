const supertest = require('supertest');

const { StatusCodes } = require('../../../src/libs/constants');
const server = require('../../../src/server');
const mockCreditCard = require('./mockCreditcard');

beforeAll((done) => {
   jest.setTimeout(1000);
   done();
});

describe('CreditCard Controller', () => {
   describe('GET All & ADD', () => {
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
               // expect(res.body.data[0].msg).toBe('Invalid card number!');
               expect(res.body.data[0].msg).toBe('Wrong format!');
               done();
            });
      });

      it('should return 400 w/ invalid card number for POST /api/creditCards', (done) => {
         supertest(server)
            .post('/api/creditCards')
            .send(mockCreditCard.creditCardWithInvalidNumber)
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.BadRequest);
               expect(res.body.data[0].msg).toBe('Invalid card number!');
               // expect(res.body.data[1].msg).toBe('Wrong format!');
               done();
            });
      });

      it('should return 400 w/ wrong format number for POST /api/creditCards', (done) => {
         supertest(server)
            .post('/api/creditCards')
            .send(mockCreditCard.creditCardWithWrongFormatNumber)
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.BadRequest);
               expect(res.body.data[0].msg).toBe('Wrong format!');
               done();
            });
      });

      it('should return 400 w/ wrong format limit for POST /api/creditCards', (done) => {
         supertest(server)
            .post('/api/creditCards')
            .send(mockCreditCard.creditCardWithInvalidLimit)
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.BadRequest);
               expect(res.body.data[0].msg).toBe('Invalid limit!');
               done();
            });
      });

      it('should return 200 w/ valid input for POST /api/creditCards', (done) => {
         supertest(server)
            .post('/api/creditCards')
            .send(mockCreditCard.creditCardWithValidInput)
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.Created);
               done();
            });
      });

      it('should return array of 1 Credit Cards w/ 0 balance for GET /api/creditCards', (done) => {
         supertest(server)
            .get('/api/creditCards')
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.OK);
               expect(res.body.data).not.toBeNull();
               expect(res.body.data).not.toBeUndefined();
               expect(Array.isArray(res.body.data)).toBe(true);
               expect(res.body.data.length).toBe(1);
               expect(res.body.data[0].balance).toBe('£0');
               done();
            });
      });
   });

   describe('CHARGE', () => {
      it('should return validation errors for PUT /api/creditCards/:name/', (done) => {
         supertest(server)
            .put(`/api/creditCards/${mockCreditCard.validName}/charge`)
            .end((err, res) => {
               expect(res.status).toBe(StatusCodes.BadRequest);
               expect(res.body.data[0].msg).toBe('Name is required!');
               expect(res.body.data[1].msg).toBe('Amount is required!');

               done();
            });
      });
   });
})
