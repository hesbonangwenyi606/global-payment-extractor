const request = require('supertest');
const express = require('express');
const mpesaRoutes = require('./mpesa.routes');

const app = express();
app.use(express.json());
app.use('/api/mpesa', mpesaRoutes);

describe('M-Pesa Routes', () => {
  it('should confirm API connection', async () => {
    const res = await request(app).get('/api/mpesa');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/M-Pesa API connected/);
  });

  it('should simulate transaction', async () => {
    const res = await request(app)
      .post('/api/mpesa/simulate')
      .send({ phone: '254700123456', amount: 1000 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.provider).toBe('M-Pesa');
    expect(res.body.success).toBe(true);
  });

  it('should check balance', async () => {
    const res = await request(app).get('/api/mpesa/balance');
    expect(res.statusCode).toEqual(200);
    expect(res.body.balance).toBeDefined();
  });
});
