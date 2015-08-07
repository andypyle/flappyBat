var BatGraphicsComponent = function(entity){
	this.entity = entity;
};

BatGraphicsComponent.prototype.draw = function(context, pos){
	context.beginPath();
	context.arc(pos, 250, 100, 0, 2 * Math.PI);
	context.fill();
};

exports.BatGraphicsComponent = BatGraphicsComponent;