var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');

var bat = require('./entities/bat');
var tree = require('./entities/tree');
var cloud = require('./entities/cloud');
var bottom = require('./entities/bottom');
var top = require('./entities/top');
var left = require('./entities/left');

function randomTime(min,max) { 
	return Math.random() * (max - min) + min;
};

Array.prototype.clear = function(){
	return this.splice(0,this.length);
};

Array.prototype.removeEntity = function(){
	return this.splice(4, 1);
}

var FlappyBat = function(){
	this.entities = [new bat.Bat(), new bottom.Bottom(), new top.Top(), new left.Left()];
	self = this.entities;

	newTree = window.setInterval(function(){
		self.push(new tree.Tree());
		}, randomTime(1500, 2000));

	newCloud = window.setInterval(function(){
		self.push(new cloud.Cloud());
		}, randomTime(2500, 4500));

	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics = new physicsSystem.PhysicsSystem(this.entities);
	this.inputs = new inputSystem.InputSystem(this.entities);

};

FlappyBat.prototype.run = function(){
	this.graphics.run();
	this.physics.run();
	this.inputs.run();	
	gameOver = function(){
		window.clearInterval('newTree');
		window.clearInterval('newCloud');
		window.clearInterval('physicsInterval');
		window.cancelAnimationFrame('renderLoop');
		self.clear();
		self.push(new bat.Bat(), new bottom.Bottom(), new top.Top(), new left.Left());
	}
};

tree.Tree.prototype.onCollision = function(entity){
	if(entity.components.name == 'LEFT')
		self.removeEntity();
	return false;
};

left.Left.prototype.onCollision = function(entity){
	
};

bat.Bat.prototype.onCollision = function(){
	gameOver();
};

exports.FlappyBat = FlappyBat;