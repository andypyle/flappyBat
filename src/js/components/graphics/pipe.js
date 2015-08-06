var PipeGraphicsComponent = function(entity){
	this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(){
	console.log('Drawing pipe.');
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;