var graphicsComponent = require('../components/graphics/bat');
var physicsComponent = require('../components/physics/physics')

var Bat = function(){
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.y = 0.5;
	physics.acceleration.y = -1.15;

	var graphics = new graphicsComponent.BatGraphicsComponent(this);

	this.components = {
		physics: physics,
		graphics: graphics
	};
};

exports.Bat = Bat;