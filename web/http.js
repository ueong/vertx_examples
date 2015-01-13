var vertx = require('vertx');
var console = require('vertx/console');
vertx.createHttpServer().requestHandler(function(req) {
	// do something
	req.response.end('Hello world!!');
}).listen(8080);
console.log('localhost:8080 deployed');
