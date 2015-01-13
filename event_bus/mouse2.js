var vertx = require('vertx');
var eb = require('vertx').eventBus;
var console = require('vertx/console');

console.log('mouse 2 deployed');

eb.registerHandler('warning.address', function(message) {
	console.log('mouse 2: ' + message);
});
