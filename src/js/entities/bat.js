var graphicsComponent = require('../components/graphics/bat');
var Bat = function(){
	console.log('Creating bat entity.');

	var graphics = new graphicsComponent.BatGraphicsComponent(this);

	this.components = {
		graphics: graphics
	};
};

exports.Bat = Bat;