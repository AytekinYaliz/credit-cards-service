const { currencyFormatter } = require('../../libs/constants');
const { creditCardCollection } = require('../database');


module.exports.getAll = function() {
   return creditCardCollection.getAll();
};

module.exports.create = function(creditCard) {
   creditCard.balance = currencyFormatter.format(0);

   return creditCardCollection.create(creditCard);
};
