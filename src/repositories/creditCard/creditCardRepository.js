const { creditCardCollection } = require('../database')

module.exports.getAll = function() {
   return creditCardCollection.getAll();
};
