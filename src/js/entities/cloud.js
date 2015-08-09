var graphicsComponent = require('../components/graphics/cloud');
var physicsComponent = require('../components/physics/physics');
var collisionComponent = require('../components/collision/rect');

function randomReal(min,max) { 
	return Math.random() * (max - min) + min;
};

var Cloud = function(){
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 1;
	physics.acceleration.x = -0.12;
	physics.velocity.x = 0.15;
	physics.position.y = 1;

	y = randomReal(0.5, 1);

	cloudPositions = {
		y: 0,
		width: y
	};

	graphics = new graphicsComponent.CloudGraphicsComponent(this);
	collision = new collisionComponent.RectCollisionComponent(this, {x: y * 2, y: 0.1});

	this.components = {
		physics: physics,
		graphics: graphics,
		positions: cloudPositions,
		collision: collision,
		name: 'Cloud'
	};
};

exports.Cloud = Cloud;