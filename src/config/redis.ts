import { createClient } from 'redis';
import 'dotenv/config';

export default async function connectRedis() {
  const client = createClient({
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASS}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/hotels`,
  });
  // client.on('error', (err) => console.log('Redis Client Error', err));
  return await client.connect();
}
