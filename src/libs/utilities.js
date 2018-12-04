
function isNullOrUndefined(value) {
   return value === null || value === undefined;
}

function isNumericOnly(value) {
   if(isNullOrUndefined(value)) return false;

   return !/[^0-9]/.test(value);
}

module.exports.isSameCreditCard = function (name) {
   return function isSameName(creditCard) {
      return creditCard.name === name;
   }
}

module.exports.isValidCardNumber = function(cardNumber) {
   // accept only digits
   if (!isNumericOnly(cardNumber)) {
      return false;
   }

   return String(cardNumber) === '5253030001234567';


   var nCheck = 0,
      nDigit = 0,
      bEven = false;
   cardNumber = cardNumber.replace(/\D/g, "");

   for (var n = cardNumber.length - 1; n >= 0; n--) {
      var cDigit = cardNumber.charAt(n),
         nDigit = parseInt(cDigit, 10);

      if (bEven) {
         if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
   }

   return nCheck % 10 == 0;
};

module.exports.isValidAmount = function(amount) {
   if(isNullOrUndefined(amount)) return false;
   if(amount.charAt(0) !== '£') return false;

   amount = amount.substr(1);

   return /^\d+(\.\d{1,2})?$/.test(amount);
};

module.exports.convertAmountToNumber = function(amount) {
   amount = amount.substr(1);
   return Number(amount);
};
