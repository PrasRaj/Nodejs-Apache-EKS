// Code exactly the same as the previous one
/// A sample node.js application that prints out the message in a browser
var http = require('http');
var websitenodejs = function(req, res) {
res.writeHead(200);
res.end('Welcome to the Ubuntu server.js ');
}
var server = http.createServer(websitenodejs);
server.listen(8068);
/// run 'node *server.js file
