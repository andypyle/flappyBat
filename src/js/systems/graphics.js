var GraphicsSystem = function(entities){
	this.entities = entities;
	// Draw on canvas.
	this.canvas = document.getElementById('main-canvas');
	// Context of canvas (what we draw to)
	this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function(){
	// Run render loop.
	window.requestAnimationFrame(this.tick.bind(this));
	frame = 0;
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

	// Rendering
	for(var i=0; i<this.entities.length; i++){
		var entity = this.entities[i];
		if(!'graphics' in entity.components){
			continue;
		}

		entity.components.graphics.draw(this.context, (frame += 1 * 5));
	}
	// Run render loop.
	window.requestAnimationFrame(this.tick.bind(this));
};

exports.GraphicsSystem = GraphicsSystem;