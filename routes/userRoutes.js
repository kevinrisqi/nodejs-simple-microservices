const user = require('../controller/user');

async function routes(fastify) {
    fastify.get('/user', user.getAllUser);
    fastify.get('/user/:id', user.getUserById);
    fastify.delete('/deleteUser/:id', user.deleteUserById);
    fastify.post('/addUser', user.addUser);
    fastify.put('/updateUser/:id', user.updateUser);
}

module.exports = routes;