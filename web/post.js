var console = require('vertx/console');
var vertx = require('vertx');

var http = vertx.createHttpServer().requestHandler(function(req) {
	req.dataHandler(function(buffer) {
		var contentType = req.headers().get('Content-Type');

		if(contentType === 'application/x-www-form-urlencoded') {
			var map = {};
			java.net.URLDecoder.decode(buffer.toString(), 'UTF-8').split('&').forEach(function(data) {
				var s = data.split('=');
				map[s[0]] = s[1];
			});
		} else if(contentType === 'application/json') {
			var map = JSON.parse(buffer.toString());
		}
	});
	
}).listen(8080);