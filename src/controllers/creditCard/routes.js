const { Router } = require("express");

const creditCardController = require("./CreditCardController");
const router = Router();

router
   .route('/')
   .get(creditCardController.getAll);


module.exports = router;
