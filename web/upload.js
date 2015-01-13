var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
	req.expectMultiPart(true);
	req.uploadHandler(function(upload) {
		upload.streamToFileSystem('upload/' + upload.filename());
	});

	req.endHandler(function() {
		req.response.end("Upload Completed");
	});
}).listen(8080);

