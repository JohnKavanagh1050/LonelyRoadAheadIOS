var splashImg;
var ctx;

function Splash(){
	this.loopSound = new Audio("assets/mainMenuMusic.mp3");
	this.loopSound.volume = .1;
}

Splash.prototype.initCanvas = function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.getAttribute("width");
	height = canvas.getAttribute("height");

	if (touchable) {
		canvas.addEventListener( 'touchstart', onTouchStart, false );
	} else {
		console.log("not touchable");
		canvas.addEventListener("click", false);
	};

	var splashImg = new Image();
	splashImg.src = 'assets/splash.png';

	splashImg.onload = function() {
        ctx.drawImage(splashImg, 0, 0);
	};

	this.loopSound.addEventListener('ended',function()
	{
		splash.loopSound.currentTime=0;
		splash.loopSound.play();
	},false);


	this.loopSound.play();
}

Splash.prototype.draw = function(){
	ctx.drawImage(splashImg, 0, 0);
}