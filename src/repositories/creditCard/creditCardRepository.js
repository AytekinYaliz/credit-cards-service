const { currencyFormatter } = require('../../libs/constants');
const { creditCardCollection } = require('../database');


module.exports.getAll = function() {
   return creditCardCollection.getAll().map(creditCard => ({
      ...creditCard,
      balance: currencyFormatter.format(creditCard.balance)
   }));
};

module.exports.create = function(creditCard) {
   creditCard.balance = 0;

   return creditCardCollection.create(creditCard);
};
