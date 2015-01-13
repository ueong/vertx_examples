var console = require('vertx/console');
var vertx = require('vertx');

var http = vertx.createHttpServer().requestHandler(function(req) {
	if(req.uri() === '/favicon.ico') {
		return;
	}

	console.log('Method : ' + req.method());
	console.log('Uri : ' + req.uri());
	console.log('Query : ' + req.query());
	console.log('Params : ' + req.params().get('productId'));

	req.params().forEach(function(key, value) {
		console.log('Key : ' + key + ' ,  Value : ' + value);
	});

	req.response.end();
}).listen(8080);