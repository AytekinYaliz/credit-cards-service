const dotenv = require('dotenv');


if (process.env.NODE_ENV === 'test') {
   dotenv.config({ path: `.env.test` });
} else {
   dotenv.config();
}

module.exports = {
   apiPrefix: process.env.apiPrefix,
   port: process.env.port
}
