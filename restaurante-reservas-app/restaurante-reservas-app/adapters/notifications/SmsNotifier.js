/**
 * SmsNotifier: implementación simulada (log) para enviar SMS.
 */
class SmsNotifier {
  constructor() {}

  async send(notification) {
    // Simula envío de SMS
    console.log('[SmsNotifier] Enviando SMS a', notification.phone, 'mensaje:', notification.body);
    return true;
  }
}

module.exports = SmsNotifier;
