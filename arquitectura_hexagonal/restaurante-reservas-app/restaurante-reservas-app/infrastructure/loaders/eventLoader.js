import { KafkaConsumer } from '../../adapters/events/KafkaConsumer.js';

export const eventLoader = async () => {
  console.log('Cargando consumidores de eventos...');
  KafkaConsumer.subscribe(['reserva.creada', 'reserva.cancelada']);
};
