var Hapi = require("hapi");

var server = new Hapi.Server();

server.connection({
    port: parseInt(process.env.PORT, 10) || 3000,
    host: '0.0.0.0'
});

module.exports = server;

server.register({
    register: require('good'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    },
    register: require('./index.js')

}, function (err) {
    if (err)
        throw err;

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
