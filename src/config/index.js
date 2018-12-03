const dotenv = require('dotenv');

dotenv.config();

module.exports = {
   apiPrefix: process.env.apiPrefix,
   port: process.env.port
}