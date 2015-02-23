var sceneArray;

function SceneManager(){
	this.sceneArray = [];

	//this.sceneArray.push( new SplashScene() );

	//this.i = 0;
}

SceneManager.prototype.goToNextScene = function(e){
	this.i = (this.i + 1) % this.sceneArray.length;
}

SceneManager.prototype.addScene = function(title){
	if (title == "GameScene"){
		this.sceneArray.push( new GameScene() );
	}

	if (title == "MenuScene"){
		this.sceneArray.push( new MenuScene() );
	}

	if (title == "SplashScene"){
		this.sceneArray.push( new SplashScene() );
	}
}

SceneManager.prototype.goToScene = function(title){
	if (title == "SplashScene"){
		this.i =0;
	} 
	if (title == "MenuScene"){
		this.i=1;
	}
	if (title == "GameScene"){
		this.i=2;
	}
}

SceneManager.prototype.getCurrentScene = function(){
	return this.i;
}