var net = require('net');

function fill(n) { 
   return n < 10 ? '0' + n : n 
}

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + fill(d.getMonth() + 1) + "-"
    + fill(d.getDate()) + " "
    + fill(d.getHours()) + ":"
    + fill(d.getMinutes()) 
    + "\n";
  socket.end(s);
});

server.listen(process.argv[2]);
