var scene;
var title;

function Scene(){
	
}

function Scene(sceneName)
{
	this.title = sceneName;
	this.nextScene;
}
Scene.prototype.nextScene = function(nextScene)
{	
}

Scene.prototype.getFinished = function(){
}

Scene.prototype.setFinished = function(pFinished){
}