var net = require('net'),
    port = process.argv[2];


var format = function(time){
  return time < 10 ? '0' + time : time;
};

var correctTime = function(){
  var date = new Date();
  data = date.getFullYear() + "-"
       + format(date.getMonth() + 1) + "-"
       + format(date.getDate()) + " "
       + format(date.getHours()) + ":"
       + format(date.getMinutes());
  return data;
};

var socketHandler = function(socket){
  socket.end(correctTime() + "\n");
};

var server = net.createServer(socketHandler);

server.listen(port);