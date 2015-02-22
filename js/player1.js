function Paddle(x, y) {
  this.xPos = x;
  this.yPos = y;
  this.sizeWidth = 25;
  this.sizeHeight = 150;
}

Paddle.prototype.moveUp = function()
{
		this.yPos -= 20;
}

Paddle.prototype.moveDown = function()
{
		this.yPos += 20;	
}

Paddle.prototype.draw = function()
{
	var g = 255;
	var r = 255;
	var b = 255;

	game.ctx.fillStyle = rgb(r,g,b);
	game.ctx.fillRect(this.xPos, this.yPos, this.sizeWidth, this.sizeHeight); 
	game.ctx.fill();
}