const { StatusCodes } = require('../../libs/constants');
const creditCardRepository = require('../../repositories/creditCard/creditCardRepository');


module.exports.getAll = function(req, res, next) {
   const creditCards = creditCardRepository.getAll();

   return res.json({ data: creditCards });
}

module.exports.create = function(req, res, next) {
   const creditCard = req.body;

   const creditCards = creditCardRepository.create(creditCard);

   return res.send(StatusCodes.Created);
}


module.exports.charge = function(req, res, next) {
   const creditCard = req.body;

   // const creditCards = creditCardRepository.charge(creditCard);

   // return res.send(StatusCodes.Created);
}
