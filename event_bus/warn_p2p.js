var container = require('vertx/container');
var eb = require('vertx').eventBus;
var console = require('vertx/console');
var timer = require('vertx/timer');

container.deployVerticle('mouse1.js');
container.deployVerticle('mouse2.js');

timer.setTimer(3000, function() {
	eb.send('warning.address','A cat is coming!');
});

