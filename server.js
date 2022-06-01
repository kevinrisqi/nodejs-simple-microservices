// import fastify
const fastify = require("fastify")();
const Swagger = require('./swagger_option');

const teknisiRoutes = require('./routes/teknisiRoutes');
const userRoutes = require('./routes/userRoutes');
const kerusakanRoutes = require('./routes/kerusakanRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

// swagger configuration
fastify.register(require('fastify-swagger'), Swagger.options);

fastify.register(teknisiRoutes);
fastify.register(userRoutes);
fastify.register(kerusakanRoutes);
fastify.register(orderRoutes);
fastify.register(adminRoutes);


// create server
const startServer = async () => {
  try {
    await fastify.listen(3000, (err, port) => {
      if (err) {
        return err;
      }
      fastify.swagger();
      console.log(`server is running on ${port}`);
    });
  } catch (err) {
      console.log(err);
      process.exit(1);
  }
};

startServer();
