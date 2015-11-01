var RaffleHandlers = require("./handlers/api/raffle_handlers");
module.exports = [
    {
        path: '/',
        method: 'GET',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    },
    {
        path: '/{path*}',
        method: 'GET',
        handler: {
            directory: {
                path: './public',
                listing: false
            }
        }

    },
    {
        path: '/api/raffles',
        method: 'GET',
        handler: RaffleHandlers.index
    },
    {
        path: '/api/raffles/{id}',
        method: 'GET',
        handler: RaffleHandlers.show
    },
    {
        path: '/api/raffles',
        method: 'POST',
        handler: RaffleHandlers.create
    },
    {
        path: '/api/raffles/{id}',
        method: 'PUT',
        handler: RaffleHandlers.update
    },
    {
        path: '/api/raffles/{id}',
        method: 'DELETE',
        handler: RaffleHandlers.delete
    }
];