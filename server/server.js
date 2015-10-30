var Hapi = require("hapi");

var server = new Hapi.Server();

server.connection({
    port: parseInt(process.env.PORT, 10) || 3000,
    host: '0.0.0.0'
});

server.ext('onRequest', function (request, reply) {
    console.log("Request received: " + request.path);
    reply.continue();
});

module.exports = server;

server.register({
    register: require('good'),
    register: require('inert'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }

}, function (err) {
    if (err)
        throw err;

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.file('./../public/index.html');
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            handler: {
                directory: {
                    path: './../public',
                    listing: false
                }
            }

        }
    ]);

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
