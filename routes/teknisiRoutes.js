const teknisi = require('../controller/teknisi');

async function routes(fastify) {
    fastify.get('/teknisi', teknisi.getAllTeknisi);
    fastify.get('/teknisi/:id', teknisi.getTeknisiById);
    fastify.delete('/deleteTeknisi/:id', teknisi.deleteTeknisiById);
    fastify.post('/addTeknisi', teknisi.addTeknisi);
    fastify.put('/updateTeknisi/:id', teknisi.updateTeknisi);
}

module.exports = routes;

