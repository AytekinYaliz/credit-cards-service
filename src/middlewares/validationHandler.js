const { validationResult } = require("express-validator/check");

const { StatusCodes } = require("../libs/constants");


module.exports = function validationHandler() {
   return (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         // console.log( errors.array() );

         return res
            .status(StatusCodes.BadRequest)
            .json({ data: errors.array() });
      }

      next();
   };
};
