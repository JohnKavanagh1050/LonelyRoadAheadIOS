var mouseX, mouseY, 
// is this running in a touch capable environment?
touchable = 'createTouch' in document,
touches = []; // array of touch vectors

//setInterval(draw, 1000/35); 
function main()
{
	setupCanvas();	
	setupTouch();
}

function setupTouch()
{
	if(touchable) {
		canvas.addEventListener( 'touchstart', onTouchStart, false );
		canvas.addEventListener( 'touchmove', onTouchMove, false );
		canvas.addEventListener( 'touchend', onTouchEnd, false );
		window.onorientationchange = resetCanvas;  
		window.onresize = resetCanvas;  
	} 
	else {
		console.log("not touchable");		
		canvas.addEventListener( 'mousedown', onMouseDown, false );
	}
}

function resetCanvas (e) {  
 	// resize the canvas - but remember - this clears the canvas too. 
  	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight;
	
	//make sure we scroll to the top left. 
	window.scrollTo(0,0); 
}

function draw() {
  
	c.clearRect(0,0,canvas.width, canvas.height); 
	
	c.fillStyle	 = "white"; 
	c.fillText("hello", 100,0);
	
	
	if(touchable) {
	
		for(var i=0; i<touches.length; i++)
		{
			var touch = touches[i]; 
			c.beginPath(); 
			c.fillStyle = "white";
			c.fillText("touch id : "+touch.identifier+" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30); 
			c.beginPath(); 
			c.strokeStyle = "red";
			c.lineWidth = "6";
			c.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true); 
			c.stroke();
		}
	} else {
		
		c.fillStyle	 = "white"; 
		c.fillText("mouse : "+mouseX+", "+mouseY, mouseX, mouseY); 
		
	}
	//c.fillText("hello", 0,0); 
	
}

/*	
 *	Touch event (e) properties : 
 *	e.touches: 			Array of touch objects for every finger currently touching the screen
 *	e.targetTouches: 	Array of touch objects for every finger touching the screen that
 *						originally touched down on the DOM object the transmitted the event.
 *	e.changedTouches	Array of touch objects for touches that are changed for this event. 					
 *						I'm not sure if this would ever be a list of more than one, but would 
 *						be bad to assume. 
 *
 *	Touch objects : 
 *
 *	identifier: An identifying number, unique to each touch event
 *	target: DOM object that broadcast the event
 *	clientX: X coordinate of touch relative to the viewport (excludes scroll offset)
 *	clientY: Y coordinate of touch relative to the viewport (excludes scroll offset)
 *	screenX: Relative to the screen
 *	screenY: Relative to the screen
 *	pageX: Relative to the full page (includes scrolling)
 *	pageY: Relative to the full page (includes scrolling)
 */	

function onTouchStart(e) {
 
	touches = e.touches; 
	//alert("touch!");
	draw();

}


 
function onTouchMove(e) {
	 // Prevent the browser from doing its default thing (scroll, zoom)
	e.preventDefault();
	touches = e.touches; 
	
} 
 
function onTouchEnd(e) { 
   
   	touches = e.touches; 
   
}

function onMouseDown(event) {

	//mouseX = event.offsetX;
	//mouseY = event.offsetY;


}


function setupCanvas() {
	
	canvas = document.createElement( 'canvas' );
	c = canvas.getContext( '2d' );
	container = document.createElement( 'div' );
	container.className = "container";

	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 
	document.body.appendChild( container );
	container.appendChild(canvas);	
	
	c.strokeStyle = "#ffffff";
	c.lineWidth =2;	
}