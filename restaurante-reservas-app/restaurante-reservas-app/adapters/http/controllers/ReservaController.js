class ReservaController {
  constructor(reservaService) {
    this.reservaService = reservaService;
  }

  async crear(req, res) {
    await this.reservaService.crearReserva(req.body);
    res.send("Reserva creada con éxito.");
  }
}
