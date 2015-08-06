var graphicsSystem = require('./systems/graphics');
var bat = require('./entities/bat');
var tree = require('./entities/tree');

var FlappyBat = function(){
	this.entities = [new bat.Bat(), new tree.Tree()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBat.prototype.run = function(){
	this.graphics.run();
};

exports.FlappyBat = FlappyBat;