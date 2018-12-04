const { currencyFormatter } = require('../../libs/constants');
const { creditCardCollection } = require('../database');


module.exports.getAll = function() {
   return creditCardCollection.getAll().map(creditCard => ({
      ...creditCard,
      balance: currencyFormatter.format(creditCard.balance)
   }));
};

module.exports.create = function(creditCard) {
   return creditCardCollection.create({
      ...creditCard,
      balance: 0
   });
};

module.exports.charge = function({ name, amount }) {
   const creditCard = creditCardCollection.getOne(name);

   if(!creditCard)
      throw Error('Credit card not found!');

   if(creditCard.limit < creditCard.balance + amount)
      throw Error('Exceeds the limit!');

   creditCard.balance += amount;
   creditCardCollection.update(creditCard);

   return creditCard;
};
