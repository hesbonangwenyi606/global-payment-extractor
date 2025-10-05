const request = require('supertest');
const express = require('express');
const flutterwaveRoutes = require('./flutterwave.routes');

const app = express();
app.use(express.json());
app.use('/api/flutterwave', flutterwaveRoutes);

describe('Flutterwave Routes', () => {
  it('should confirm API connection', async () => {
    const res = await request(app).get('/api/flutterwave');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/Flutterwave API connected/);
  });

  it('should initiate payment', async () => {
    const res = await request(app)
      .post('/api/flutterwave/pay')
      .send({ email: 'test@example.com', amount: 1500, currency: 'KES' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.provider).toBe('Flutterwave');
    expect(res.body.success).toBe(true);
  });

  it('should verify payment', async () => {
    const res = await request(app).get('/api/flutterwave/verify/FLW123456');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('successful');
  });
});
