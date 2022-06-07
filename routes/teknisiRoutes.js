const teknisi = require('../controller/teknisi');

async function routes(fastify) {
    fastify.get('/teknisi', {
        schema: {
            description: 'Test Teknisi',
            params: {},
        },
        response: {
            200: {
                description: 'Success Response',
                type: 'object',
                headers: {
                    'Access-Control-Allow-Origin': {
                        type: 'string'
                    }
                },
                properties: {
                    
                }
            },
            400: {
                description: 'Failed to send Response'
            }
        }
    }, teknisi.getAllTeknisi);


    fastify.get('/teknisi/:id', teknisi.getTeknisiById);
    fastify.delete('/deleteTeknisi/:id', teknisi.deleteTeknisiById);
    fastify.post('/addTeknisi', teknisi.addTeknisi);
    fastify.put('/updateTeknisi/:id', teknisi.updateTeknisi);
}

module.exports = routes;

