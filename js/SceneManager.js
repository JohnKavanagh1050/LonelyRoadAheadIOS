function SceneManager()
{
	this.sceneArray = [];

	this.sceneArray.push( new OpeningScene() );
	this.sceneArray.push( new MiddleScene() );
	this.sceneArray.push( new EndScene() );
	this.clicked = false;
	this.i = 0;
}

SceneManager.prototype.addScene = function()
{

}

SceneManager.prototype.goToNextScene = function(e)
{
	//console.log("goToNextScene");
	this.i = (this.i + 1) % this.sceneArray.length;
}


SceneManager.prototype.goToScene = function(title1)
{
	if (title1 == "OpeningScene")
	{
		this.i =0;
	} 
	if (title1 == "MiddleScene")
	{
		this.i=1;
	}
	if (title1 == "EndScene")
	{
		this.i=2;
	}
}

SceneManager.prototype.getScene = function(e)
{
	if (this.i == 0) 
		return this.sceneArray[0];
	if (this.i == 1) 
		return this.sceneArray[1];
	if (this.i == 2) 
		return this.sceneArray[2];
}