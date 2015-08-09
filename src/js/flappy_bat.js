var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');

var bat = require('./entities/bat');
var tree = require('./entities/tree');
var cloud = require('./entities/cloud');

function randomTime(min,max) { 
	return Math.random() * (max - min) + min;
};

var FlappyBat = function(){
	
	this.entities = [new bat.Bat()];
	var self = this.entities;

	window.setInterval(function(){
		self.push(new tree.Tree());
		}, randomTime(1500, 2000));

	window.setInterval(function(){
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
};

exports.FlappyBat = FlappyBat;