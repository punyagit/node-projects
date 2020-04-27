const fs = require('fs');
const express = require('express');
const EventEmitter = require('events');

const chatEmitter = new EventEmitter();
const port = process.env.PORT || 4000;

const app = express();

app.get('/', respondText);
app.get('/json', respondJson);
app.get('/echo', respondEcho);
app.get('/static/*', respondStatic);
app.get('/chat', respondChat);
app.get('/sse', respondSSE);

app.listen(port, () => console.log(`Server listening on port ${port}`));

function respondText(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
}

function respondJson(req, res) {
  res.json({ text: 'hi', numbers: [1, 2, 3] });
}

function respondEcho(req, res) {
  const { input = '' } = req.query;

  res.json({
    normal: input,
    shouty: input.toUpperCase(),
    characterCount: input.length,
    backwards: input.split('').reverse().join(''),
  });
}

function respondStatic(req, res) {
  const filename = `${__dirname}/public/${req.params[0]}`;
  fs.createReadStream(filename)

    .on('error', () => respondNotFound(req, res))
    .pipe(res);
}

function respondChat(req, res) {
  const { message } = req.query;

  chatEmitter.emit('message', message);
  res.end();
}

function respondSSE(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  });

  const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
  chatEmitter.on('message', onMessage);

  res.on('close', function () {
    chatEmitter.off('message', onMessage);
  });
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

//   const express = require('express');
// const app = express();
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const port = 4000;
// const EventEmitter = require('events');
// const chatEmitter = new EventEmitter();
// app.use(bodyParser.json());

// app.get('/static/*', respondStatic);
// app.get('/chat', respondChat);
// app.get('/sse', respondSSE);

// app.listen(port, console.log('Starting Server in Port ' + port));

// function respondStatic(req, res) {
//   console.log(':hellll------');
//   const filename = `${__dirname}/public/${req.params[0]}`;
//   fs.createReadStream(filename)

//     .on('error', () => respondNotFound(req, res))
//     .pipe(res);
// }
// function respondChat(req, res) {
//   console.log('responxe chat');
//   const { message } = req.query;
//   console.log(message);
//   chatEmitter.emit('message', message);
//   res.end();
// }

// function respondSSE(req, res) {
//   console.log('respon sse');
//   res.writeHead(200, {
//     'Content-Type': 'text/event-stream',
//     Connection: 'keep-alive',
//   });

//   const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
//   chatEmitter.on('message', onMessage);

//   res.on('close', function () {
//     chatEmitter.off('message', onMessage);
//   });
// }

// function respondNotFound(req, res) {
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.end('Not Found');
// }
