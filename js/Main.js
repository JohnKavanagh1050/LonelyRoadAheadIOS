var currentScene;
function main()
{
	//change version number if you suspect a problem with caching
	console.log("version 1");
	sceneM = new SceneManager();
	
	//CHOOSE ONE OF THESE TO CHOOSE THE SCENE YOU WANT TO SHOW
	currentScene = new SplashScene();
	//currentScene = new MenuScene();
	//currentScene = new GameScene();



	//currentScene = sceneM.getCurrentScene();
	//if(currentScene.getFinished()){
	//	currentScene = new GameScene();
	//}
}