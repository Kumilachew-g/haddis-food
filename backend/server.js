const express = require('express');

const food = require('./models/foodModel');

const app = express();
const db = require('./db');
app.use(express.json());
const path = require('path');
app.use(express.static('public'));

const foodRouter = require('./routes/foodRoute');
const userRouter = require('./routes/userRoute');
const orderRouter = require('./routes/ordersRoute');

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// vercel deployment setup
if (process.env.NODE_ENV === 'production') {
  const vercelAsset = require('@vercel/asset');

  app.use('/', express.static(vercelAsset.resolveAsset('client/build')));

  app.get('*', (req, res) => {
    res.sendFile(vercelAsset.resolveAsset('client/build/index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log`Server is running on port ${port}`;
});

module.exports = app;
