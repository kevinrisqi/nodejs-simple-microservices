const order = require('../controller/order');

async function routes(fastify) {
    fastify.get('/order', order.addOrder);
}

module.exports = routes;