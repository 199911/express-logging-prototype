const express = require('express');
const pino = require('express-pino-logger')()

const app = express();

app.use(pino);

app.all('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
