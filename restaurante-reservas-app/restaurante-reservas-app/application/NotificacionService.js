class NotificacionService {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  async enviarConfirmacion(cliente, reserva) {
    const mensaje = `Hola ${cliente.nombre}, tu reserva ${reserva.id} ha sido confirmada.`;
    await this.notificationService.enviarCorreo(cliente.email, mensaje);
  }
}
