const order = require('../controller/order');

async function routes(fastify) {
    fastify.post('/addOrder', order.addOrder);
}

module.exports = routes;