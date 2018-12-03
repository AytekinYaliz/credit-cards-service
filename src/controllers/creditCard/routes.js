const { Router } = require("express");

const creditCardController = require("./creditCardController");
const router = Router();

router
   .route('/')
   .get(creditCardController.getAll);


module.exports = router;
