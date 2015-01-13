var container = require('vertx/container');

container.deployVerticle('../hello/src/main/java/local/vertx/hello/TcpServer.java');
container.deployVerticle('message.js');
