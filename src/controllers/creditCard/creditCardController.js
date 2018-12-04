const { StatusCodes } = require("../../libs/constants");
const { convertAmountToNumber } = require('../../libs/utilities');
const creditCardRepository = require("../../repositories/creditCard/creditCardRepository");

module.exports.getAll = function(req, res, next) {
   const creditCards = creditCardRepository.getAll();

   return res.json({ data: creditCards });
};

module.exports.create = function(req, res, next) {
   let creditCard = req.body;
   creditCard = creditCardRepository.create(creditCard);

   return res.send(StatusCodes.Created);
};

module.exports.charge = function(req, res, next) {
   let creditCard = req.body;
   creditCard.amount = convertAmountToNumber(creditCard.amount);

   creditCard = creditCardRepository.charge(creditCard);

   return res.status(StatusCodes.OK).json({
      data: {
         cardNumber: creditCard.cardNumber,
         remainingBalance: creditCard.limit - creditCard.balance
      }
   });
};

module.exports.credit = function(req, res, next) {
   let creditCard = req.body;
   creditCard.amount = convertAmountToNumber(creditCard.amount);

   creditCard = creditCardRepository.credit(creditCard);

   return res.status(StatusCodes.OK)
      .json({
         data: {
            cardNumber: creditCard.cardNumber,
            remainingBalance: creditCard.limit - creditCard.balance
         }
      });
};
