let port = 80
let host = '185.26.120.76'
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port,host);

console.info(process.env)
console.info('listening on ', host, port )
