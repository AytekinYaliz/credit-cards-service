const { isSameCreditCard } = require('../../libs/utilities');


const creditCards = [];

module.exports.getAll = function() {
   return [...creditCards];
}

module.exports.getOne = function(name) {
   return creditCards.find( isSameCreditCard(name) );
}

module.exports.create = function(creditCard) {
   creditCards.push(creditCard);
}

module.exports.update = function(creditCard) {
   const cc = creditCards.find( isSameCreditCard(creditCard.name) );
   cc.balance = creditCard.balance;
}

