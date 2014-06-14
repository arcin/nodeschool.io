var net = require('net'),
    port = process.argv[2];

var server = net.createServer(socketHandler);

var socketHandler = function(socket){

};

server.listen(port);