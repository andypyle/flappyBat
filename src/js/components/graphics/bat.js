var BatGraphicsComponent = function(entity){
	this.entity = entity;
};

BatGraphicsComponent.prototype.draw = function(context){
	var position = this.entity.components.physics.position;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.arc(0,0, 0.02, 0, 2 * Math.PI);
	context.fillStyle = '#0000FE';
	context.fill();
	context.closePath();
	context.restore();
};

exports.BatGraphicsComponent = BatGraphicsComponent;