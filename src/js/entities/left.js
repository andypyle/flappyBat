var physicsComponent = require('../components/physics/physics');
var collisionComponent = require('../components/collision/rect');
var graphicsComponent = require('../components/graphics/invis');


var Left = function(){
	physics = new physicsComponent.PhysicsComponent(this);
	physics.position.y = 1.25;
	physics.position.x = -1;
	physics.acceleration.y = 0;

	var size = {
		width: 0.25,
		height: 5,
		x: -2
	};

	var graphics = new graphicsComponent.InvisGraphicsComponent(this);

	var collision = new collisionComponent.RectCollisionComponent(this, {x:size.width, y: size.height});
	collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		collision: collision,
		graphics: graphics,
		size: size,
		name: 'LEFT'
	};
};

exports.Left = Left;