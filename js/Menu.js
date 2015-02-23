function Menu (){
	this.loopSound = new Audio("assets/mainMenuMusic.mp3");
	this.loopSound.volume = .0;
}

Game.prototype.initCanvas=function () { 
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

	this.loopSound.addEventListener('ended',function()
	{
		game.loopSound.currentTime=0;
		game.loopSound.play();
	},false);
	
	this.loopSound.play();
}

Game.prototype.update = function (){
	if(KeyController.isKeyDown(Key.UP)){
	}
}

function onTouchDown(e){
	touches = e.touches;
}

Game.prototype.checkCollisions=function (){

}

Game.prototype.gameLoop = function () {
	
}

Game.prototype.draw =function (){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"));
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"));
}