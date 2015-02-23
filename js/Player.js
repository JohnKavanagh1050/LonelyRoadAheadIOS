var playerWidth = 40; //Since the player is a square it doesn't need two values for width and height, playerWidth represents both the height and width of the player
var xPos;
var yPos;
var xVelocity;
var yVelocity;
var onSurfuce;
var collidingLeft;
var collidingRight;
var collidingTop;
var score = 0;
var dead = false;


var Player=function (x, y){
	xPos = x;
	yPos = y;
	xVelocity = 0;
	yVelocity = 0;
	onSurfuce = false;
	collidingLeft = false;
	collidingRight = false;
	collidingTop = false;
};

Player.prototype.update = function(){
	if(!onSurfuce){
		yVelocity = yVelocity + (9.81*(1/60));
	} else {
		yVelocity = 0;
		xVelocity = xVelocity *(0.5);//friction of brass and steel
	}

	xPos += xVelocity;
	yPos += yVelocity;

	this.drawPlayer(xPos, yPos, "red")
};

//Getter Methods
Player.prototype.getXPos = function(){
	return xPos;
}

Player.prototype.getYPos = function(){
	return yPos;
}

Player.prototype.getWidth = function(){
	return playerWidth;
}

Player.prototype.getOnSurface = function(){
	return onSurfuce;
}

Player.prototype.getCollidingLeft = function(){
	return collidingLeft;
}

Player.prototype.getCollidingRight = function(){
	return collidingRight;
}

Player.prototype.getCollidingTop = function(){
	return collidingTop;
}

//Setter Methods
Player.prototype.setPosition = function(x,y){
	xPos = x;
	yPos = y;
}

Player.prototype.setOnSurface = function(onTop){
	onSurfuce = onTop;
}

Player.prototype.setXVelocity = function(x){
	xVelocity = x;
}

Player.prototype.setYVelocity = function(y){
	yVelocity = y;
}

Player.prototype.setCollidingLeft = function(x){
	collidingLeft = x;
}

Player.prototype.setCollidingRight = function(x){
	collidingRight = x;
}

Player.prototype.setCollidingTop = function(x){
	collidingTop = x;
}


Player.prototype.drawPlayer = function(x,y, color){ //Draw method for the player class
	ctx.fillStyle = color;
	ctx.fillRect(x, y, playerWidth, playerWidth);
	ctx.strokeStyle = "white";
	ctx.strokeRect(x, y, playerWidth, playerWidth);
};