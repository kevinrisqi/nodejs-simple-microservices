const kerusakan= require('../controller/kerusakan');

async function routes(fastify) {
    fastify.get('/kerusakan', kerusakan.getAllKerusakan);
    fastify.get('/kerusakan/:id', kerusakan.getKerusakanById);
    fastify.delete('/deleteKerusakan/:id', kerusakan.deleteKerusakanById);
    fastify.post('/addKerusakan', kerusakan.addKerusakan);
    fastify.put('/updateKerusakan/:id', kerusakan.updateKerusakan);
}

module.exports = routes;