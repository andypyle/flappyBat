var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');

var bat = require('./entities/bat');
var tree = require('./entities/tree');

var FlappyBat = function(){
	this.entities = [new bat.Bat(), new tree.Tree()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics = new physicsSystem.PhysicsSystem(this.entities);
	this.inputs = new inputSystem.InputSystem(this.entities);
};

FlappyBat.prototype.run = function(){
	this.graphics.run();
	this.physics.run();
	this.inputs.run();
};

exports.FlappyBat = FlappyBat;