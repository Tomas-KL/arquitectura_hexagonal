import { connectDatabase } from '../config/database.js';
import { initKafka } from '../config/kafka.js';

export const appLoader = async () => {
  await connectDatabase();
  await initKafka();
  console.log('Listo para recibir peticiones');
};