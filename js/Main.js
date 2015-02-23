var currentScene;
function main()
{
	//change version number if you suspect a problem with caching
	console.log("version 1");
	sceneM = new SceneManager();
	sceneM.addScene("SplashScene");
	currentScene = new Scene();
	currentScene = sceneM.getScene("SplashScene");
	if(currentScene.getFinished()){
		sceneM.addScene("GameScene");
	}
}
