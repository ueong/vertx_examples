var container = require('vertx/container');
var eb = require('vertx').eventBus;
var console = require('vertx/console');
var timer = require('vertx/timer');

container.deployVerticle('mouse1.js');
container.deployVerticle('mouse2.js');

var a = 0
var warning = function() {
	eb.send('warning.address','A cat is coming!' +(a++));
};

timer.setTimer(1000, warning);
timer.setTimer(1100, warning);
timer.setTimer(1200, warning);
timer.setTimer(1300, warning);
timer.setTimer(1400, warning);
timer.setTimer(1500, warning);

