var net = require('net');

var HOST = '10.0.0.28';
var PORT = 8080;

net.createServer(function(sock){

    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.
        remotePort);
    
        sock.on('data', function(data){
            console.log('DATA' + sock.remoteAddress + ':'+ data);
            sock.write('You said ' + data);
        });
    
    sock.prependOnceListener('close', function(data){
        console.log('CLOSED' + sock.remoteAddress + ' ' + sock.
            remotePort);
    });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);

