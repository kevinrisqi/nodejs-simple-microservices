const order = require('../controller/order');

async function routes(fastify) {
    fastify.post('/addOrder', order.addOrder);
    fastify.get('/getOrder/:id', order.getOrder);
}

module.exports = routes;