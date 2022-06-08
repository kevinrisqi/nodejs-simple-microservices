const order = require('../controller/order');

async function routes(fastify) {
    fastify.post('/addOrder', order.addOrder);
    fastify.get('/order', order.getAllOrder);
    fastify.get('/order/findByPhone/:phone_number', order.getOrderPhone);
    fastify.get('/order/findByStatus/:status', order.getOrderStatus);
    fastify.put('/order/changeStatusOrder/:id/:status', order.changeStatusOrder);
}

module.exports = routes;