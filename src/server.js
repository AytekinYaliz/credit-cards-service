const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');
const config = require('./config');
const errorHandler = require('./middlewares/errorHandler')


const app = express();

app.use(bodyParser.json());
app.use(config.apiPrefix, router);

app.use(errorHandler(config.nodeEnv));


module.exports = app;
