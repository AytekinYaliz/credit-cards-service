**to start the server:**
 - npm start
 - yarn start
  
**to run tests:**
 - npm test
 - yarn test
  
**to run tests w/ watch mode:**
 - npm run test:w
 - yarn test:w
  
  
**some further improvements:**
 - _Data Access Layer (Repositories)_ will throw specific errors:  
   class BaseError extends Error { ... }  
   class DBError extends BaseError { ... }  
   class DuplicateKeyError extends DBError { ... }  
   class BadRequestError extends DBError { ... }
 - _HTTP Layer_ needs to return specific responses which will inherit from a base http response class:  
   class HttpResponse { ... }  
   class BadRequestResponse extends HttpResponse { ... }  
   class NotFoundResponse extends HttpResponse { ... }  
   errorHandler middleware will catch these specific errors and will return related responses.
 - Linting
