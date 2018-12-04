const validName = 'valid-name';
const invalidName = 'invalid-name';
const invalidCardNumber = 12345678912312;
const wrongFormatCardNumber = 11111222223333344444;
const validCardNumber = '4984421209470251';
const validLimit = 123.23;
const invalidAmount = '234';
const validCharge = 10.23;
const validCredit = 9.15;

module.exports = {
   validName,
   invalidName,
   validCardNumber,
   validLimit,
   validCharge,
   validCredit,

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
      limit: '234.333'
   },
   creditCardWithValidInput: {
      name: validName,
      cardNumber: validCardNumber,
      limit: `£${validLimit}`
   },

   creditCardWithEmptyAmount: {
   },
   creditCardWithInvalidAmount: {
      name: validName,
      amount: invalidAmount
   },
   creditCardWithValidCharge: {
      name: validName,
      amount: `£${validCharge}`
   },
   creditCardWithExceedLimit: {
      name: validName,
      amount: `£${validLimit - validCharge + 1}`
   },
   creditCardWithInvalidName: {
      name: invalidName,
      amount: '£1'
   },

   creditCardWithValidCredit: {
      name: validName,
      amount: `£${validCredit}`
   }
};
