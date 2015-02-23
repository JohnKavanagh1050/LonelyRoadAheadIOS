SplashScene.prototype = new Scene("SplashScene");       			// Here's where the inheritance occurs 

var splash;

function SplashScene()
{
	
	var fps = 60;
	splash= new Splash();

	splash.initCanvas();
	ctx.clearRect(0,0,canvas.width, canvas.height);
	var x = 0;

	setInterval(onTimerTick, 1000/60); // 16 milliseconds = ~ 60 frames per sec

	function onTimerTick() {
		if(x<1){
    		splash.draw();
    		x+= 1/120;
    	}else{
    		splash.setFinished(true);
    	}
	}
}