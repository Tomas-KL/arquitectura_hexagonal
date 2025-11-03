class KafkaProducer {
  async publish(eventName, payload) {
    console.log(`Evento publicado: ${eventName}`, payload);
  }
}
