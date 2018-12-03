const { Router } = require('express');

const router = Router();

router.get('/health-check', (req, res, next) => {
   res.send('OK')
});

module.exports = router;