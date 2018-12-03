const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');
const config = require('./config');


const app = express();

app.use(bodyParser.json());
app.use(config.apiPrefix, router);

module.exports = app;
