var flappyBat = require('./flappy_bat');

document.addEventListener('DOMContentLoaded', function(){
	var app = new flappyBat.FlappyBat();
	app.run();
});