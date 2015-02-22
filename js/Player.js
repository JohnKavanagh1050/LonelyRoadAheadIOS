
var width = 40;
var heigt = 40;
var food;
var score = 0;
var dead = false;


var Player=function (){
};

Player.prototype.update = function()
{
};

Player.prototype.restart = function(){
}

Player.prototype.setDirection = function(x){
	direction = x;
}

Player.prototype.getDirection = function(){
	return direction;
}

Player.prototype.drawCell = function(x,y, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
	ctx.strokeStyle = "white";
	ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
};

Player.prototype.check_collision = function(x, y, array)
{
	//This function will check if the provided x/y coordinates exist
	//in an array of cells or not
	for(var i = 0; i < array.length; i++)
	{
		if(array[i].x == x && array[i].y == y)
		 return true;
	}
	return false;
}