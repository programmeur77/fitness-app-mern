require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Successfully connected to server' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
