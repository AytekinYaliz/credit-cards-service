// const validator = require('validator');
const { isValidCardNumber } = require('../../libs/utilities');

const validations = {
   id: {
      in: ['query'],
      custom: {
         options: (id, { req }) => isValidObjectId(req.params.id),
         errorMessage: 'Wrong format!'
      }
   },
   name: {
      // in: ['body'],
      isLength: {
         options: { min: 1 },
         errorMessage: 'Name is required!'
      }
   },
   cardNumber: {
      in: ['body'],
      isLength: {
         options: { min: 1, max: 19 },
         errorMessage: 'Wrong format!'
      },
      custom: {
        options: (cardNumber, { req }) => isValidCardNumber(req.body.cardNumber),
        errorMessage: "Invalid card number!"
      }
   },
   // limi: {
   //    in: ['body'],
   //    isLength: {
   //       options: { min: 1, max: 19 },
   //       errorMessage: 'Wrong format!'
   //    },
   //    custom: {
   //      options: (cardNumber, { req }) => isValidCardNumber(req.body.cardNumber),
   //      errorMessage: "Invalid card number!"
   //    }
   // }
};

module.exports = {

   // POST /api/creditCards
   create: {
      name: {
         in: ['body'],
         ...validations.name
      },
      cardNumber: validations.cardNumber
   }
};
