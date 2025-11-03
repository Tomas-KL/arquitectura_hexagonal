class Reserva {
  constructor(id, clienteId, mesaId, fecha, hora, total) {
    this.id = id;
    this.clienteId = clienteId;
    this.mesaId = mesaId;
    this.fecha = fecha;
    this.hora = hora;
    this.estado = "pendiente";
    this.total = total;
  }

  confirmar() { this.estado = "confirmada"; }
  cancelar() { this.estado = "cancelada"; }
}
