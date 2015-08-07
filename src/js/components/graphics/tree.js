var TreeGraphicsComponent = function(entity){
	this.entity = entity;
};

TreeGraphicsComponent.prototype.draw = function(context, frame){

	var position = this.entity.components.physics.position;
	var blockPos = this.entity.components.positions;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.rect(0,blockPos.bottom.y,0.1,blockPos.bottom.height);
	context.fill();
	context.closePath();
	context.beginPath();
	context.rect(0,blockPos.top.y,0.1,blockPos.top.height);
	context.fill();
	context.closePath();
	context.restore();	

};

exports.TreeGraphicsComponent = TreeGraphicsComponent;