// import fastify
const fastify = require("fastify")();
const teknisiRoutes = require('./routes/teknisiRoutes');
const userRoutes = require('./routes/userRoutes');
const kerusakanRoutes = require('./routes/kerusakanRoutes');

fastify.register(teknisiRoutes);
fastify.register(userRoutes);
fastify.register(kerusakanRoutes);

// create server
const startServer = async () => {
  try {
    await fastify.listen(3000, (err, port) => {
      if (err) {
        return err;
      }
      console.log(`server is running on ${port}`);
    });
  } catch (err) {
      console.log(err);
      process.exit(1);
  }
};

startServer();
