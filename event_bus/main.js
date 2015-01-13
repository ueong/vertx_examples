var container = require('vertx/container');
var eb = require('vertx').eventBus;
var timer = require('vertx/timer');
var console = require('vertx/console');

console.log('start');
container.deployVerticle('message.js');

var msg = function() {
	eb.send('message.address', 'Hello!!');
};

timer.setTimer(1, msg);
timer.setTimer(1000, msg);
timer.setTimer(2000, msg);
timer.setTimer(3000, msg);
timer.setTimer(4000, msg);
timer.setTimer(5000, msg);

