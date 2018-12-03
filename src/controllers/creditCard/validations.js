
const validations = {
   id: {
      in: ['query'],
      custom: {
         options: (id, { req }) => isValidObjectId(req.params.id),
         errorMessage: 'Wrong format!'
      }
   },
   name: {
      // in: ['body'],
      isLength: {
         options: { min: 1 },
         errorMessage: 'Name is required!'
      }
   },
   cardNumber: {
      in: ['body'],
      isInt: true,
      toInt: true,
      isLength: {
         options: { max: 19 },
         errorMessage: 'Wrong format!'
      },
      // custom: {
      //   options: (phones: any[]) => Array.isArray(phones), // && phones.length > 0 && phones.every(x => isValidObjectId(x)),
      //   errorMessage: "Phones should be a list of strings!"
      // }
   }
};

module.exports = {

   // POST /api/creditCards
   create: {
      name: {
         in: ['body'],
         ...validations.name
      }
   }
};
