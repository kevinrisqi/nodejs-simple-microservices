const kerusakan = require('../controller/kerusakan');
const docsKerusakan = require('../docs/swagger/docsKerusakan');

async function routes(fastify) {
    fastify.get('/kerusakan', docsKerusakan.findAllKerusakan, kerusakan.getAllKerusakan);
    fastify.get('/kerusakan/:id', docsKerusakan.findKerusakanByID, kerusakan.getKerusakanById);
    fastify.post('/addKerusakan', docsKerusakan.addKerusakan, kerusakan.addKerusakan);
    fastify.put('/updateKerusakan/:id', docsKerusakan.updateKerusakan, kerusakan.updateKerusakan);
    fastify.delete('/deleteKerusakan/:id', docsKerusakan.deleteKerusakan, kerusakan.deleteKerusakanById);
}

module.exports = routes;