const { Router } = require('express');

const creditCardRoutes = require('./controllers/creditCard/routes');
const router = Router();


router.get('/health-check', (req, res, next) => {
   res.send('OK')
});

router.use('/creditCards', creditCardRoutes)

module.exports = router;
