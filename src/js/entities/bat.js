var graphicsComponent = require('../components/graphics/bat');
var physicsComponent = require('../components/physics/physics');
var collisionComponent = require('../components/collision/circle');
//var settings = require('../settings');

var Bat = function(){
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.y = 0.5;
	physics.acceleration.y = -1.15;

	var graphics = new graphicsComponent.BatGraphicsComponent(this);

	var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
	collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
	n = 0;
};

Bat.prototype.onCollision = function(entity){
	console.log(entity.components.name);
};

exports.Bat = Bat;