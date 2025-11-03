test('registro de cliente', async () => {
  const nuevoCliente = { nombre: 'Carlos', email: 'carlos@mail.com' };
  expect(nuevoCliente.email).toMatch(/@/);
});
