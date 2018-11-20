const express = require('express');
const bodyParser = require('body-parser');
const pino = require('pino')
const logger = require('pino-http')({
  serializers: {
    req: (req) => {
      return Object.assign(pino.stdSerializers.req(req), {
        body: req.raw.body,
      })
    },
  },
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

app.all('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000);
