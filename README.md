*to start the server:*
 - npm start
 - yarn start
  
*to run tests:*
 - npm test
 - yarn test
  
*to run tests w/ watch mode:*
 - npm run test:w
 - yarn test:w


*some missing improvements:*
 - Repositories (Data Access Layer) will throw spesific errors:  
   class BaseError extends Error { ... }  
   class DuplicateKeyError extends DBError { ... }
   class BadRequestError extends DBError { ... }
 - We need to have spesific responses which will inherit from a base http response class:  
   class HttpResponse { ... }  
   class BadRequestResponse extends HttpResponse  
   errorHandler will catch these spesific errors and will return spesific responses  
   