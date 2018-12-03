const creditCardRepository = require('../../repositories/creditCard/creditCardRepository');


module.exports.getAll = function(req, res, next) {
   const creditCards = creditCardRepository.getAll();

   return res.json({ data: creditCards });
}

module.exports.create = function(req, res, next) {
   const creditCards = creditCardRepository.getAll();

   return res.json({ data: creditCards });
}
