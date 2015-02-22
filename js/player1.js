function Ball()
{
	this.xPos =window.innerWidth / 2;
	this.yPos = window.innerHeight / 2;
	this.velX = 2;
	this.velY = 2;
	this.speed = 3;
	this.sizeWidth = 100;
	this.sizeHeight = 100;
	this.radius = 20;
	this.score1 = 0;
	this.score2 = 0;
}

Ball.prototype.update = function()
{
	this.xPos += this.velX * this.speed;
	this.yPos += this.velY * this.speed;

	//make the ball move around screen
	if(this.yPos > window.innerHeight - 20)
		this.velY *= -1;
	if(this.yPos < 20)
		this.velY *= -1;

	//makes sure the ball spawns in the middle afewtr a score
	if(this.xPos > window.innerWidth - 20)
	{
		this.xPos = window.innerWidth / 2;
		this.yPos = window.innerHeight / 2;
		this.velX *= -1;
		this.score1++;
	}
	if(this.xPos < 0)
	{
		this.xPos = window.innerWidth / 2;
		this.yPos = window.innerHeight / 2;
		this.velX *= -1;
		this.score2++;
	}

	//reset score when a player scores 10
	if(this.score1 == 10)
	{
		this.score1 = 0;
		this.score2 = 0;
	}
	if(this.score2 == 10)
	{
		this.score1 = 0;
		this.score2 = 0;
	}
}

Ball.prototype.draw = function()
{
	var g = 255;
	var r = 255;
	var b = 255;

	game.ctx.beginPath();
	//score
	game.ctx.font = "80px jing jing";
	game.ctx.fillText(this.score1,400,75);
	game.ctx.fillText(this.score2,800,75);
	//ball
	game.ctx.fillStyle = rgb(r,g,b);
	game.ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI*2, true); 
	game.ctx.closePath();
	game.ctx.fill();
}

Ball.prototype.checkCollision = function (e){
	if ((this.xPos < e.xPos + e.sizeWidth) && (this.xPos + this.sizeWidth > e.xPos) &&
	(this.yPos + this.sizeHeight > e.yPos) && (this.yPos < e.yPos + e.sizeHeight))
	{			
		this.velX *= -1;
	}
};

Ball.prototype.checkCollision = function (e){	
	if ((this.xPos < e.xPos + e.sizeWidth) && (this.xPos > e.xPos) &&
	(this.yPos > e.yPos) && (this.yPos < e.yPos + e.sizeHeight))
	{				
		this.velX *= -1;
	}
};