const server = require('./server');

const port = process.env.port || 4000;

const runningServer = server.listen(port, () => {
   console.log(`App is running on port: ${port}.`);
   console.log('Press CTRL-C to STOP.');
});

module.exports = runningServer;