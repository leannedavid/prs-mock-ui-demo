var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var nodes = [];

io.on('connection', function(socket) {
  socket.emit('initial nodes', nodes);

  socket.on('new node', function(node) {
    node.content = '';
    nodes[node.index] = node;
  });

  socket.on('node content change', function(changeData) {
     nodes[changeData.index].content = changeData.content;
     socket.broadcast.emit('node content change', changeData);
  });
});

app.use(express.static('public'));
app.use('/socket', express.static('public-socket'));
app.use('/node_modules', express.static('node_modules'));

var port = Number(process.argv[2]);
if (isNaN(port)) { port = 5000; }

http.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

