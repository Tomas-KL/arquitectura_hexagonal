import request from 'supertest';
import app from '../../adapters/http/routes.js';

test('GET /reservas devuelve 200', async () => {
  const res = await request(app).get('/reservas');
  expect(res.statusCode).toBe(200);
});