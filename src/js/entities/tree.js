var graphicsComponent = require('../components/graphics/tree');
var Tree = function(){
	//console.log('Creating tree entity.');

	var graphics = new graphicsComponent.TreeGraphicsComponent(this);

	this.components = {
		graphics: graphics
	};
};

exports.Tree = Tree;