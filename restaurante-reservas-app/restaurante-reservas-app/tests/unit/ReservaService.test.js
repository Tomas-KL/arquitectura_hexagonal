import { ReservaService } from '../../application/ReservaService.js';
import { FakeReservaRepository } from '../mocks/FakeReservaRepository.js';

const repo = new FakeReservaRepository();
const service = new ReservaService(repo);

test('crear reserva válida ', async () => {
  const reserva = await service.crearReserva({ clienteId: 1, mesaId: 2 });
  expect(reserva.estado).toBe('CONFIRMADA');
});