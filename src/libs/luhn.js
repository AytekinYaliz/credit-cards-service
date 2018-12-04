const { isNumericOnly, isNullOrUndefined } = require("./utilities");

module.exports = (function(arr) {
   return function(ccNum) {
      if (isNullOrUndefined(ccNum) || ccNum === '') return false;
      if(typeof ccNum !== 'string') return false;
      if (!isNumericOnly(ccNum)) return false;

      var len = ccNum.length,
         bit = 1,
         sum = 0,
         val;

      while (len) {
         val = parseInt(ccNum.charAt(--len), 10);
         sum += (bit ^= 1) ? arr[val] : val;
      }

      return sum && sum % 10 === 0;
   };
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
