const express = require('express');
const morgan = require('morgan');

const app = express();

const custom = morgan((tokens, req, res) => {
  const obj = {
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    'content-length': tokens.res(req, res, 'content-length'),
    'response-time': tokens['response-time'](req, res)
  };
  return JSON.stringify(obj);
});
app.use(custom);

app.get('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
