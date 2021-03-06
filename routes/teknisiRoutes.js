const teknisi = require('../controller/teknisi');
const docsTeknisi = require('../docs/swagger/docsTeknisi');

async function routes(fastify) {
    fastify.get('/teknisi', docsTeknisi.findAllTeknisi, teknisi.getAllTeknisi);
    fastify.get('/teknisi/:id', docsTeknisi.findTeknisiByID, teknisi.getTeknisiById);
    fastify.post('/addTeknisi', docsTeknisi.insertTeknisi, teknisi.addTeknisi);
    fastify.put('/updateTeknisi/:id', docsTeknisi.updateTeknisi, teknisi.updateTeknisi);
    fastify.delete('/deleteTeknisi/:id', docsTeknisi.deleteTeknisi, teknisi.deleteTeknisiById);
}

module.exports = routes;

