const keys = require('../config/keys');
const stripe = require('stripe')(
  keys.stripeSecretKey
);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must be logged in to do that' });
    }
    
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 survey credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};