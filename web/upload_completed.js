var vertx = require('vertx');
var console = require('vertx/console');

vertx.createHttpServer().requestHandler(function(req) {
	var uri = req.uri();
	if(uri == "/upload") {
		req.expectMultiPart(true);
		req.uploadHandler(function(upload) {
			var filename = upload.filename();
			vertx.fileSystem.open(filename, function(err, file) {
				var pump = new vertx.Pump(req, file);
				req.endHandler(function() {
					file.close(function() {
						req.response.end("Uploaded " + pump.bytesPumped() + " bytes to " + filename);
					});
				});
				pump.start();
				req.resume();
			});
		});
	}

}).listen(8080);

