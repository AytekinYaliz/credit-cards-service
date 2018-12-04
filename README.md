**to start the server:**
 - npm start
 - yarn start
  
**to run tests:**
 - npm test
 - yarn test
  
**to run tests w/ watch mode:**
 - npm run test:w
 - yarn test:w


**some missing improvements:**
 - Data Access Layer (Repositories) will throw specific errors:  
   class BaseError extends Error { ... }  
   class DuplicateKeyError extends DBError { ... }
   class BadRequestError extends DBError { ... }
 - HTTP layer needs to return specific responses which will inherit from a base http response class:  
   class HttpResponse { ... }  
   class BadRequestResponse extends HttpResponse  
   errorHandler will catch these specific errors and will return related responses
 - Linting
