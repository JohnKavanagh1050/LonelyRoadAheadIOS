var ctx;
var player;
var androidPlayer;
var score;

function Game(){
	this.loopSound = new Audio("assets/music.mp3");
	this.loopSound.volume = .0;
}

Game.prototype.initWorld = function(){
   	//Here is where we will have to read in the starting position of the android player
   	androidPlayer = new Player(720,420);
   	player = new Player(20, 20);
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
	//Here is where we will recieve a message from the server about the Javaplayers input

	//androidPlayer.setXPos(recievedXPosition);
	//androidPlayer.setYPos(recievedYPosition);

	if(KeyController.isKeyDown(Key.UP))
	{
		if (player.getOnSurface()){
			player.setOnSurface(false);
			player.setYVelocity(-5);
		}
		if (player.getCollidingTop()){
			player.setOnSurface(false);
			player.setYVelocity(-.25);
		}
	}
	
	if(!player.getCollidingLeft() ){
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
	//Check player collisions
	if ((player.getYPos() + player.getWidth()) > (canvas.height - 5)){ //If the player is touching the ground
		player.setOnSurface(true);
	} else{
		player.setOnSurface(false);
	}

	if ((player.getXPos() + player.getWidth()) > (canvas.width-5)){ // if the player is touching the rightmost edge
		player.setCollidingRight(true);
	}else if ((player.getXPos() + player.getWidth() > (androidPlayer.getXPos() - 3)) ){ // if the player is colliding with the other player from the left
		player.setCollidingRight(true);
	}else{
		player.setCollidingRight(false);
	}

	if (player.getXPos() < 5){//if the player is colliding with the left wall
		player.setCollidingLeft(true);
	}else if ((player.getXPos-3) < (androidPlayer.getXPos() +androidPlayer.getWidth())){// if the player is colliding with the other player from the right
		player.setCollidingLeft = true;
	}else{
		player.setCollidingLeft(false);
	}

	if (player.getYPos() - (androidPlayer.getYPos() + androidPlayer.getWidth()) ){ //The Android Player is on top of the javascript player
		player.setCollidingTop(true);
	}else{
		player.setCollidingTop(false);
	}

	//checkAndroidPlayer collisions
	if ((androidPlayer.getYPos() + androidPlayer.getWidth()) > (canvas.height - 5)){
		androidPlayer.setOnSurface(true);
	} else{
		androidPlayer.setOnSurface(false);
	}

	if ((androidPlayer.getXPos() + androidPlayer.getWidth()) > (canvas.width-5)){
		androidPlayer.setCollidingRight(true);
	} else{
		androidPlayer.setCollidingRight(false);
	}

	if (androidPlayer.getXPos() < 5){
		androidPlayer.setCollidingLeft(true);
	} else{
		androidPlayer.setCollidingLeft(false);
	}
}

Game.prototype.gameLoop = function () {
	game.checkCollisions();
	game.update();
	game.draw();
	player.update("red");
	androidPlayer.update("blue");
}

Game.prototype.draw =function (){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, width, height);
}
