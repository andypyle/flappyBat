var CloudGraphicsComponent = function(entity){
	this.entity = entity;
};

CloudGraphicsComponent.prototype.draw = function(context){

	var position = this.entity.components.physics.position;
	var blockPos = this.entity.components.positions;

	context.save();
	context.translate(position.x, 0);
	context.beginPath();
	context.rect(0,0.85,blockPos.width,0.15);
	context.fillStyle = '#EFEFEF';
	context.fill();

	context.closePath();
	context.restore();
};

exports.CloudGraphicsComponent = CloudGraphicsComponent;