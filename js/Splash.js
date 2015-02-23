var splashImg;
var ctx;
var aspectRatioWidth;
var aspectRatioHeight;
var finished;

function Splash(){
	aspectRatioHeight = 0;
	aspectRatioWidth = 0;
	finished = false;
}

Splash.prototype.initCanvas = function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	splashImg = new Image();
	splashImg.src = "assets/splash.png"

	splashImg.onload = function() {
        ctx.drawImage(splashImg, 287, 127);
	};

	aspectRatioWidth = this.screenWidth/canvas.getAttribute("width");
	aspectRatioHeight = this.screenHeight/canvas.getAttribute("height");
}

Splash.prototype.draw = function(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.getAttribute("width") , canvas.getAttribute("height") );
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, canvas.getAttribute("width")  , canvas.getAttribute("height")  );
	ctx.drawImage(splashImg, 287 , 127  );

	console.log("drawing splash");
}

Splash.prototype.getFinished = function(){
	return finished;
}

Splash.prototype.setFinished = function(pFinished){
	finished = pFinished;
}