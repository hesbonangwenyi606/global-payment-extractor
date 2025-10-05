const request = require('supertest');
const express = require('express');
const stripeRoutes = require('./stripe.routes');

const app = express();
app.use(express.json());
app.use('/api/stripe', stripeRoutes);

describe('Stripe Routes', () => {
  it('should confirm API connection', async () => {
    const res = await request(app).get('/api/stripe');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/Stripe API connected/);
  });

  it('should create payment', async () => {
    const res = await request(app)
      .post('/api/stripe/pay')
      .send({ amount: 1000, currency: 'USD', email: 'test@example.com' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.provider).toBe('Stripe');
    expect(res.body.success).toBe(true);
  });

  it('should verify payment', async () => {
    const res = await request(app).get('/api/stripe/verify/STRIPE123456');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('successful');
  });
});
