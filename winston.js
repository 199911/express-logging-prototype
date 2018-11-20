const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');

const app = express();

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json(),
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
}));

app.all('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
