var TreeGraphicsComponent = function(entity){
	this.entity = entity;
};

TreeGraphicsComponent.prototype.draw = function(context, pos){
	context.beginPath();
	pos = pos * .75;
	pos = context.canvas.width - pos;
	var bottom = context.canvas.height;
	context.rect(pos, 600, 100, 25);
	context.fillStyle = 'green';
	context.fill();
};

exports.TreeGraphicsComponent = TreeGraphicsComponent;