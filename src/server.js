const express = require('express');


const app = express();

app.get('/health-check', (req, res, next) => {
   res.send('OK')
});

module.exports = app;
