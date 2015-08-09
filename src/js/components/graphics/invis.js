var InvisGraphicsComponent = function(entity){
	this.entity = entity;
};

InvisGraphicsComponent.prototype.draw = function(context){

	var position = this.entity.components.physics.position;
	var size = this.entity.components.size;

	context.save();
	context.translate(0, position.y);
	context.beginPath();
	context.rect(size.x,position.y,size.width,size.height);
	context.closePath();
	context.restore();
};

exports.InvisGraphicsComponent = InvisGraphicsComponent;