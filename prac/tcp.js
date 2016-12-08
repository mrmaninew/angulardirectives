var net = require('net');

var server = net.createServer();
server.on('connection', handleConnection);
server.listen(8000, function() {
    console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
    conn.setEnconding('utf-8');
    console.log('new client connection from %s', remoteAddress);
    conn.on('data', function(d) {
        console.log('connection data from %s: %j', remoteAddress, d.toString());
        console.log(d.toString());
        conn.write(d);
    });
    conn.on('error', function() {
        console.log('some error');

    });
    conn.on('close', function() {
        console.log('connection from %s closed', remoteAddress);
    });
}