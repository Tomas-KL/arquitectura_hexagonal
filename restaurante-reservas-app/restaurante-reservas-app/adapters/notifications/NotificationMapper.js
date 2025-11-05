class NotificationMapper {
  toNotification(reserva, tipo = 'CREADA') {
    return {
      subject: `Reserva ${tipo}: ${reserva.id || ''}`,
      to: reserva.clienteEmail || (reserva.Cliente && reserva.Cliente.email) || 'no-reply@example.com',
      body: `Tu reserva para la mesa ${reserva.mesaId} el ${reserva.fechaHoraInicio} ha sido ${tipo.toLowerCase()}.`,
      phone: reserva.clienteTelefono || (reserva.Cliente && reserva.Cliente.telefono) || null
    };
  }
}

module.exports = NotificationMapper;
