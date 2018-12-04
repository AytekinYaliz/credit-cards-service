
module.exports.isNullOrUndefined = function (value) {
   return value === null || value === undefined;
}

module.exports.isNumericOnly = function (value) {
   if(exports.isNullOrUndefined(value) || value === '') return false;

   return !/[^0-9]/.test(value);
}

module.exports.isSameCreditCard = function (name) {
   return function isSameName(creditCard) {
      return creditCard.name === name;
   }
}

module.exports.isValidAmount = function(amount) {
   if(exports.isNullOrUndefined(amount)) return false;
   if(amount.charAt(0) !== '£') return false;

   amount = amount.substr(1);

   return /^\d+(\.\d{1,2})?$/.test(amount);
};

module.exports.convertAmountToNumber = function(amount) {
   amount = amount.substr(1);
   return Number(amount);
};
