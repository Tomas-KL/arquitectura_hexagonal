export const Policies = {
  puedeReservar: (cliente) => !!cliente.email,
  puedeCancelar: (reserva) => reserva.estado === "pendiente"
};
