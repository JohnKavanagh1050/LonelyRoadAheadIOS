var scene;

function Scene(sceneName)
{
	this.title1 = sceneName;
	this.nextScene;
}

Scene.prototype.draw = function()
{
	game.ctx.font = "100px Jing Jing";
	game.ctx.fillText(this.title1,400,450);
	document.body.style.backgroundColor = "#FFB6C1 "; //green
}

Scene.prototype.update = function()
{
}

Scene.prototype.start = function()
{

}
Scene.prototype.stop = function()
{	
}
Scene.prototype.nextScene = function(nextScene)
{	
}
