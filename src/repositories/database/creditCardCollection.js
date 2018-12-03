const creditCards = [];

module.exports.getAll = function() {
   return [...creditCards];
}

module.exports.create = function(creditCard) {
   creditCards.push(creditCard);
}

