const validName = 'valid-name';
const invalidName = 'invalid-name';
const invalidCardNumber = 12345678912312;
const wrongFormatCardNumber = 12345678912312234234;
const validCardNumber = 5253030001234567;
const validLimit = 123.23;
const invalidAmount = '234';
const validCharge = 10.23;

module.exports = {
   validName,
   invalidName,
   validCardNumber,
   validLimit,
   validCharge,

   creditCardWithEmptyName: {
      name: ''
   },
   creditCardWithEmptyNumber: {
      name: validName
   },
   creditCardWithInvalidNumber: {
      name: validName,
      cardNumber: 'invalid'
   },
   creditCardWithWrongFormatNumber: {
      name: validName,
      cardNumber: wrongFormatCardNumber
   },
   creditCardWithInvalidLimit: {
      name: validName,
      cardNumber: validCardNumber,
      limit: 234.333
   },
   creditCardWithValidInput: {
      name: validName,
      cardNumber: validCardNumber,
      limit: validLimit
   },

   creditCardWithEmptyAmount: {
   },
   creditCardWithValidCharge: {
      name: validName,
      amount: `£${validLimit - validCharge}`
   }
};
