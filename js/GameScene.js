GameScene.prototype = new Scene("GameScene");  	// Here's where the inheritance occurs 

var game;

function GameScene(){
	game= new Game();

	game.initCanvas();
	
	//ctx the drawing context, which lets you draw onto the canvas
	//Most people call it ctx for short	
	ctx.clearRect(0,0,canvas.width, canvas.height);

	//var img = assetManager.getAsset("img/SnakeCreeping.png")
	//ctx.drawImage(img, 100, 100);

	game.initWorld();			

	//start game loop
	game.gameLoop();
	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(game.gameLoop, 16);
}