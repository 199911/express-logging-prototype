const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(pino);

app.all('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
