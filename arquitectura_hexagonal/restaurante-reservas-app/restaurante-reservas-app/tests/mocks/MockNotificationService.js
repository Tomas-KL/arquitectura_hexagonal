export class MockNotificationService {
  async enviarMensaje(destinatario, mensaje) {
    console.log(`Mock: mensaje enviado a ${destinatario}: ${mensaje}`);
  }
}