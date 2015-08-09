var graphicsComponent = require('../components/graphics/tree');
var physicsComponent = require('../components/physics/physics');
var collisionComponent = require('../components/collision/rect');

function randomReal(min,max) { 
	return Math.random() * (max - min) + min;
};

var Tree = function(){
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 1;
	physics.acceleration.x = -0.25;
	physics.velocity.x = 0.25;

	
	gap = 0.25;
	y = randomReal(0.25, 1 - gap);

	treePositions = {
		y: 0,
		height: y
	};

	graphics = new graphicsComponent.TreeGraphicsComponent(this);
	collision = new collisionComponent.RectCollisionComponent(this, {x: 0.1 / 5, y: 1});
	collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		positions: treePositions,
		collision: collision,
		name: 'Tree'
	};
};

exports.Tree = Tree;