var InputSystem = function(entities){
	this.entities = entities;

	// Get input from canvas.
	this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function(){
	this.canvas.addEventListener('click', this.onClick.bind(this));
	this.canvas.addEventListener('touchstart', this.onClick.bind(this));
};

InputSystem.prototype.onClick = function(){
	var bat = this.entities[0];
	bat.components.physics.velocity.y = 0.7;
};

exports.InputSystem = InputSystem;