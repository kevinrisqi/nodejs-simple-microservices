const admin = require('../controller/admin');

async function routes(fastify) {
    fastify.get('/admin/findAllOrder', admin.getAllOrder);
    fastify.get('/admin/findByStatus/:status', admin.getOrderByStatus);
    fastify.get('/admin/findByName/:name', admin.getOrderByName);
}

module.exports = routes;