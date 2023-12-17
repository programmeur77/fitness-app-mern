require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workOutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workOutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });

    console.log('Connection to DB succeeded');
  })
  .catch((error) => {
    console.log(error);
  });
