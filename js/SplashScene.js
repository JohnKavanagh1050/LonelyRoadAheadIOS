OpeningScene.prototype = new Scene("OpeningScene");       			// Here's where the inheritance occurs 

function OpeningScene()
{
	
}

OpeningScene.prototype.draw = function()
{
	game.ctx.font = "100px Jing Jing";
	game.ctx.fillText("Level 1",400,450);
	document.body.style.backgroundColor = "#00aeff"; //blue
}