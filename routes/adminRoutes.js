const admin = require('../controller/admin');

async function routes(fastify) {
    fastify.get('admin/findAllOrder', admin.getAllOrder);
}

module.exports = routes;