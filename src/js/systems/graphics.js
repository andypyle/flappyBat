var GraphicsSystem = function(entities){
	this.entities = entities;
	// Draw on canvas.
	this.canvas = document.getElementById('main-canvas');
	// Context of canvas (what we draw to)
	this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function(){
	// Run render loop.
	renderLoop = window.requestAnimationFrame(this.tick.bind(this));
	frame = 0;
};

gameOver = function(){
	
};

GraphicsSystem.prototype.tick = function(){
	// Set canvas to correct size if window is resized.
	if (this.canvas.width != this.canvas.offsetWidth ||
		this.canvas.height != this.canvasoffsetHeight){
		this.canvas.width = this.canvas.offsetWidth;
		this.canvas.height = this.canvas.offsetHeight;
	}

	// Clear canvas
	this.context.clearRect(0,0, this.canvas.width, this.canvas.height);

	this.context.save();
	this.context.translate(this.canvas.width / 2, this.canvas.height);
	this.context.scale(this.canvas.height, -this.canvas.height);

	// Rendering
	for(var i=0; i<this.entities.length; i++){
		var entity = this.entities[i];
		if(!'graphics' in entity.components){
			continue;
		}
		frame += 1;


		entity.components.graphics.draw(this.context, frame);
	}
	this.context.restore();
	
	// Run render loop.
	window.requestAnimationFrame(this.tick.bind(this));
};

exports.GraphicsSystem = GraphicsSystem;
exports.GameOverGraphics = gameOver;