// Configuración de Kafka (bus de eventos)
export const kafkaConfig = {
  clientId: 'reservas-service',
  brokers: ['kafka:9092'],
  groupId: 'reservas-group',
};

export const initKafka = async () => {
  console.log('Inicializando conexión con Kafka...');
};