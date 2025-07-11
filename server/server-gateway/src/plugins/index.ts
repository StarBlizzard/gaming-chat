import { readdirSync } from 'fs';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

export default (app: FastifyInstance): Promise<void[]> => Promise.all(
  readdirSync(__dirname)
    .map(async (file) => {
      if (file === 'index.ts') { return Promise.resolve(); }

      console.log(`./${file}`);
      const plugin: FastifyPluginAsync = await import(`./${file}`);

      return app.register(plugin);
    })
);
