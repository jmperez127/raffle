var Hapi = require("hapi");

var server = Hapi.Server(8080);

server.route({
    method: 'GET', path: '/', handler: function (request) {
        request.reply('hello from hapi');
    }
});

server.start();