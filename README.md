# express-logging-prototype
Try out different Node.js log framework with Express.js

## Morgan

- For access log
- Need rotating-file-stream module to have log file rotation
- Built in format for unstructured logging only
- Can implement structure logging with custom log format
- Does not have severity level

## Winston Express middleware

- Will log the header by default
- Need to filter authorization token in header
- Need to whitelist if we need request body in log
  - Require to use body-parser before logger

## Express Pino Logger

- No configuration
- Cannot log request body
