const express = require('express');
const path = require('path');
// const http = require('http');

const port = Number(process.env.PORT || 4000);

const app = express();

process.env.PWD = process.cwd();

app.set('views', path.join(process.env.PWD, './../client/dist'));

app.use(express.static(path.join(process.env.PWD, './../client/dist')));

// app.get('/', (req, res) => {
//   express.static(path.join(__dirname, './../client/dist'));
// });

// express.static(path.join(__dirname, './../client/dist'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
