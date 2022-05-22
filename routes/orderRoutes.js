const order = require('../controller/order');

async function routes(fastify) {
    fastify.get('/order', order.getAllOrder);
}

module.exports = routes;