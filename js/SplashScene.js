SplashScene.prototype = new Scene("SplashScene");       			// Here's where the inheritance occurs 

var splash;
var title;

function SplashScene()
{	
	title = "splashScene";
	var fps = 1;
	splash= new Splash();

	splash.initCanvas();
	ctx.clearRect(0,0,canvas.width, canvas.height);
	var x = 0;

	var loopID = setInterval(onTimerTick, 1000/fps); 

	function onTimerTick() {
		if(x<1){
    		splash.draw();
    		x+= 1/(fps*2);
    	}else{
    		splash.setFinished(true);
    		console.log("setting splash finished to true");
    		clearInterval(loopID);
    	}
	}
}

SplashScene.prototype.getFinished = function(){
	return splash.getFinished();
}