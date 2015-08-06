var TreeGraphicsComponent = function(entity){
	this.entity = entity;
};

TreeGraphicsComponent.prototype.draw = function(){
	console.log('Drawing tree.');
};

exports.TreeGraphicsComponent = TreeGraphicsComponent;