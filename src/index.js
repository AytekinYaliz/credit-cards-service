const server = require('./server');
const config = require('./config');

const port = config.port;

const runningServer = server.listen(port, () => {
   console.log(`App is running on port: ${port}.`);
   console.log('Press CTRL-C to STOP.');
});

module.exports = runningServer;