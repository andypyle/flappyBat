var physicsComponent = require('../components/physics/physics');
var collisionComponent = require('../components/collision/rect');
var graphicsComponent = require('../components/graphics/invis');


var Bottom = function(){
	physics = new physicsComponent.PhysicsComponent(this);
	physics.position.y = -0.25;
	physics.acceleration.y = 0;

	var size = {
		width: 5,
		height: 0.25,
		x: 0
	};

	var graphics = new graphicsComponent.InvisGraphicsComponent(this);

	var collision = new collisionComponent.RectCollisionComponent(this, {x:size.width, y: size.height});

	this.components = {
		physics: physics,
		collision: collision,
		graphics: graphics,
		size: size,
		name: 'BOTTOM'
	};
};

exports.Bottom = Bottom;