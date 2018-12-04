const dotenv = require('dotenv');


if (process.env.NODE_ENV === 'test') {
   dotenv.config({ path: `.env.test` });
} else {
   dotenv.config();
}

module.exports = {
   apiPrefix: process.env.apiPrefix,
   nodeEnv: process.env.NODE_ENV,
   port: process.env.port
}
