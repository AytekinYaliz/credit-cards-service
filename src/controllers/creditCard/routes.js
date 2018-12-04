const { Router } = require("express");
const { checkSchema, validationResult } = require('express-validator/check');

const validations = require('./validations');
const validationHandler = require('../../middlewares/validationHandler');
const creditCardController = require("./creditCardController");


const router = Router();

router
   .route('/')
   .get(creditCardController.getAll);

router
   .route('/')
   .post(
      checkSchema(validations.create),
      validationHandler(),
      creditCardController.create
   );

router
   .route('/:name/charge')
   .put(
      checkSchema(validations.charge),
      validationHandler(),
      creditCardController.charge
   );

router
   .route('/:name/credit')
   .put(
      checkSchema(validations.credit),
      validationHandler(),
      creditCardController.credit
   );

module.exports = router;
