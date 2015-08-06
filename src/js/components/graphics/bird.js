var BirdGraphicsComponent = function(entity){
	this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(){
	console.log('Drawing bird....');
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;