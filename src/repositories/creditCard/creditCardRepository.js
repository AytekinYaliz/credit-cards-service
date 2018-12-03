const { creditCardCollection } = require('../database')

module.exports.getAll = function() {
   return creditCardCollection.getAll();
};

module.exports.create = function(creditCard) {
   return creditCardCollection.create(creditCard);
};
