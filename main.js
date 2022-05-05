//Create a reference for canvas 
canvas=document.getElementById('Canvas');
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greecar_width=100;
greecar_heigth=150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greecar_x=5;
greecar_y=255;

function add() {
	//upload car, and background images on the canvas.
	background_imaTag=new Image();
	background_imaTag.onload=uploadBackground;
	background_imaTag.src=background_image;


	greecar_imgTag=new Image();
	greecar_imgTag.onload=uploadgreencar;
	greecar_imgTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imaTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greecar_imgTag,greecar_x,greecar_y,greecar_width,greecar_heigth);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greecar_y >=0){
greecar_y = greecar_y -10;
console.log("when up arrow is pressed, x = "+greecar_x+",y"+greecar_y);
uploadBackground();
uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greecar_y <=500){
		greecar_y = greecar_y +10;
		console.log("when down arrow is pressed, x = "+greecar_x+",y"+greecar_y);
		uploadBackground();
		uploadgreencar();
			}
}

function left()
{
	//Define function to move the car left side
	if(greecar_x >=0){
		greecar_x = greecar_x -10;
		console.log("when left arrow is pressed, x = "+greecar_x+",y"+greecar_y);
		uploadBackground();
		uploadgreencar();
			}
}

function right()
{
	//Define function to move the car right side
	if(greecar_x <=700){
		greecar_x = greecar_x +10;
		console.log("when riht arrow is pressed, x = "+greecar_x+",y"+greecar_y);
		uploadBackground();
		uploadgreencar();
			}
}
