var BatGraphicsComponent = function(entity){
	this.entity = entity;
};

BatGraphicsComponent.prototype.draw = function(){
	console.log('Drawing bat....');
};

exports.BatGraphicsComponent = BatGraphicsComponent;