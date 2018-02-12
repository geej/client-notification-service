const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http, {
  serveClient: false,
});

io.on('connection', (socket) => {
  socket.join('default');
  socket.emit('message', 'Connection established.');
});

app.use(bodyParser.json());
app.post('/', (req, res) => {
  console.log(req);
  console.log(req.body);
  io.to('default').emit('message', req.body);
  res.sendStatus(200);
});

app.use(express.static('public'));

http.listen(9001, () => console.log('Listening on *:9001'));