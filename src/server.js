const express = require('express');
const router = require('./router');
const config = require('./config');


const app = express();

app.use(config.apiPrefix, router);

module.exports = app;
