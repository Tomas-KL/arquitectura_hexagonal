const path = require('path');
const NotificationMapper = require('../notifications/NotificationMapper');
const SmtpNotifier = require('../notifications/SmtpNotifier');
const SmsNotifier = require('../notifications/SmsNotifier');

class ReservaWorker {
  constructor() {
    this.smtp = new SmtpNotifier();
    this.sms = new SmsNotifier();
    this.mapper = new NotificationMapper();
  }

  async processReservaCreada(reserva) {
    // Mapea y envía notificaciones
    const message = this.mapper.toNotification(reserva, 'CREADA');
    // Enviar email y sms (simulado)
    await this.smtp.send(message);
    await this.sms.send(message);
    return true;
  }

  async processReservaCancelada(reserva) {
    const message = this.mapper.toNotification(reserva, 'CANCELADA');
    await this.smtp.send(message);
    await this.sms.send(message);
    return true;
  }
}

module.exports = ReservaWorker;
