const admin = require('../controller/admin');
const docsAdmin = require('../docs/swagger/docsAdmin');

async function routes(fastify) {
    fastify.get('/admin/findAllOrder', docsAdmin.findAllOrder, admin.getAllOrder);
    fastify.get('/admin/findAllTeknisi', docsAdmin.findAllTeknisi, admin.getAllTechnician);
    fastify.get('/admin/findSpesificOrder', docsAdmin.spesificOrder, admin.getSpesificOrder);
    fastify.get('/admin/findSpesificTeknisi', docsAdmin.spesificTeknisi, admin.getSpesificTechnician);
    fastify.get('/admin/findByStatus/:status', docsAdmin.findOrderByStatus, admin.getOrderByStatus);
    fastify.get('/admin/findByName/:name', docsAdmin.findOrderByName, admin.getOrderByName);
}

module.exports = routes;