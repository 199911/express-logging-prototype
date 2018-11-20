const express = require('express');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const winston = require('winston');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json(),
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query', 'body']
}));

app.all('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
