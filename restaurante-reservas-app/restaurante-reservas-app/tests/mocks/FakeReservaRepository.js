export class FakeReservaRepository {
  constructor() {
    this.reservas = [];
  }
  async guardar(reserva) {
    this.reservas.push(reserva);
    return reserva;
  }
}
