/**
 * SmtpNotifier: implementación simulada (log) para enviar emails.
 * Si deseas integrar nodemailer, reemplaza con la lógica real.
 */
class SmtpNotifier {
  constructor() {}

  async send(notification) {
    console.log('[SmtpNotifier] Enviando email a', notification.to, 'asunto:', notification.subject);
    // Simula async
    return true;
  }
}

module.exports = SmtpNotifier;
