var ctx;
var player;
var cellWidth = 10;
var score;
var width;var height;

function Game ()
{
	this.loopSound = new Audio("assets/music.mp3");
	this.loopSound.volume = .0;
}

Game.prototype.initWorld = function()
{
   	player = new Player(20, 20);
}

Game.prototype.initCanvas=function () { 
	
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = 480;
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
	if(KeyController.isKeyDown(Key.UP))
	{
		if (player.getOnSurface()){
			player.setOnSurface(false);
			player.setYVelocity(-5);
		}
	}
	
	if(!player.getCollidingLeft()){
		if(KeyController.isKeyDown(Key.LEFT)){
			if(player.getOnSurface()){
				player.setXVelocity(-10);
			}
			else{
				player.setXVelocity(-5);
			}
		}
	}
	
	if(!player.getCollidingRight()){
		if(KeyController.isKeyDown(Key.RIGHT)){
			if(player.getOnSurface()){
				player.setXVelocity(10);
			}
			else{
				player.setXVelocity(5);
			}
		}
	}
}

function onTouchDown(e){
	touches = e.touches;
}

Game.prototype.checkCollisions=function (){
	if ((player.getYPos() + player.getWidth()) > (canvas.height - 5)){
		player.setOnSurface(true);
	} else{
		player.setOnSurface(false);
	}

	if ((player.getXPos() + player.getWidth()) > (canvas.width-5)){
		player.setCollidingRight(true);
	} else{
		player.setCollidingRight(false);
	}

	if (player.getXPos() < 5){
		player.setCollidingLeft(true);
	} else{
		player.setCollidingLeft(false);
	}
}

Game.prototype.gameLoop = function () 
{
	game.checkCollisions();
	game.update();
	game.draw();
	player.update();
}

Game.prototype.draw =function ()
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, width, height);
}
