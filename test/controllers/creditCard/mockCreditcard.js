const validName = 'valid-name';

module.exports = {
   creditCardWithEmptyName: {
      name: ''
   },
   creditCardWithEmptyNumber: {
      name: validName
   },
   creditCardWithInvalidNumber1: {
      name: validName,
      cardNumber: 'invalid'
   },
   creditCardWithInvalidNumber2: {
      name: validName,
      cardNumber: 123456789123123123123
   }
};
