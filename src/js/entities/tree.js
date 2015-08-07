var graphicsComponent = require('../components/graphics/tree');
var physicsComponent = require('../components/physics/physics');

function randomReal(min,max) { 
	return Math.random() * (max - min) + min;
};

var Tree = function(){
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 1;
	physics.acceleration.x = -0.25;
	physics.velocity.x = 0.25;

	var gap = 0.25;
	var y = randomReal(0.1, 1 - gap);

	var topBlock = {
		y: 1 - y,
		height: y
	};

	var bottomBlock = {
		y: 0,
		height: 1 - y - gap
	};

	var blocksPositions = {
		top: topBlock,
		bottom: bottomBlock
	};

	var graphics = new graphicsComponent.TreeGraphicsComponent(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		positions: blocksPositions
	};
};

exports.Tree = Tree;