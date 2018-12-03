const { Router } = require("express");

const creditCardController = require("./controller");
const router = Router();

router
   .route('/')
   .get(creditCardController.getAll);


module.exports = router;
