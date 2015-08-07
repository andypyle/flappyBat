var BatGraphicsComponent = function(entity){
	this.entity = entity;
};

BatGraphicsComponent.prototype.draw = function(context){
	context.beginPath();
	context.rect(-1, 0, 2, .1);
	context.fill();
};

exports.BatGraphicsComponent = BatGraphicsComponent;