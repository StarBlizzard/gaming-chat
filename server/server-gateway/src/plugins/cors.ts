import fp from 'fastify-plugin';
import cors from '@fastify/cors';

const allowedOrigins = [
  process.env.FRONT_END_URL,
];

export default fp(async (fastify) => {
  await fastify.register(cors, {
    origin: (origin, cb) => {
      // allow REST clients without an Origin header (e.g. curl, Postman)
      if (!origin) return cb(null, true);

      if (allowedOrigins.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error('Not allowed by CORS'), false);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
});
