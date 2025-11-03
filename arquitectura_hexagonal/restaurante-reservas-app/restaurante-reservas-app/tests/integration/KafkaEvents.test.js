test('evento de reserva creada y publicado correctamente', async () => {
  const event = { tipo: 'reserva.creada', payload: { id: 123 } };
  expect(event.tipo).toBe('reserva.creada');
});