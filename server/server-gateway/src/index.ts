import Fastify from 'fastify';
import pluginLoader from './plugins';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3001;

const app = Fastify({ logger: true });

(async () => {
  await pluginLoader(app);

  app.listen({ port: Number(PORT), host: HOST }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  }); 
})();
