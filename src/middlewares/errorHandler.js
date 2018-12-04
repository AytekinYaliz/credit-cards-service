const { StatusCodes } = require('../libs/constants');


module.exports = function errorHandlerMiddleware(nodeEnv) {
   return function errorHandler(err, req, res, next) {
      if(nodeEnv !== 'test') {
         console.error(err);
      }

      res.status(StatusCodes.BadRequest)
         .json({ error: err.message });
   }
};
