var currentScene;
function main()
{
	//change version number if you suspect a problem with caching
	console.log("version 1");
	sceneM = new SceneManager();
	sceneM.addScene("GameScene");
	/*
	currentScene = new Scene();
	currentScene = sceneM.getCurrentScene();
	if(currentScene.getFinished()){
		sceneM.addScene("GameScene");
	}
	*/
}
