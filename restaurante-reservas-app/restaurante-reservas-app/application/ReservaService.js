class ReservaService {
  constructor(reservaRepo, eventBus) {
    this.reservaRepo = reservaRepo;
    this.eventBus = eventBus;
  }

  async crearReserva(datos) {
    const reserva = new Reserva(Date.now(), datos.clienteId, datos.mesaId, datos.fecha, datos.hora, datos.total);
    await this.reservaRepo.save(reserva);
    await this.eventBus.publish("reserva.creada", reserva);
  }
}
