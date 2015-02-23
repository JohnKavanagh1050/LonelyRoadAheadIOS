var splashImg;
var ctx;
var aspectRatioWidth;
var aspectRatioHeight;

function Splash(){
}

Splash.prototype.initCanvas = function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	splashImg = new Image();
	splashImg.src = "assets/splash.png"

	aspectRatioWidth = this.screenWidth/canvas.getAttribute("width");
	aspectRatioHeight = this.screenHeight/canvas.getAttribute("height");
}

Splash.prototype.draw = function(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.getAttribute("width") /** aspectRatioWidth*/, canvas.getAttribute("height") /* * aspectRatioHeight*/);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, canvas.getAttribute("width") /* * aspectRatioWidth*/, canvas.getAttribute("height") /* * aspectRatioHeight */);
	ctx.drawImage(splashImg, 287 /* * aspectRatioWidth*/, 127 /* * aspectRatioHeight*/);
}