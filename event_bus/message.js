var vertx = require('vertx');
var eb = require('vertx').eventBus;
var console = require('vertx/console');

console.log('message.js deployed');

eb.registerHandler('message.address', function(message) {
	console.log(message);
});
