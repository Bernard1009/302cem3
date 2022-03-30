var net = require("net");

var server = net.createServer();

server.on("connection", function(socket) {
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    console.log("New Client Connection is made %s", remoteAddress);

    socket.on("data", function (d) {
        console.log("Order from %s: %s", remoteAddress, d);
        socket.write("Order Received: " + d + " => We will contact you soon! <=");
    });

    socket.once("close", function () {
        console.log("Connection from %s closed", remoteAddress);
    });

    socket.on("error", function (err) {
        console.log("Connection %s error: %s", remoteAddress, err.message);
    });

});

server.listen(9000, function () {
    console.log("server listening to %j", server.address());
});