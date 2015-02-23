SplashScene.prototype = new Scene("SplashScene");       			// Here's where the inheritance occurs 

var splash;

function SplashScene()
{
	splash= new Splash();

	splash.initCanvas();
	
	//ctx the drawing context, which lets you draw onto the canvas
	//Most people call it ctx for short	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	splash.draw();
	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(splash.draw, 60);
}