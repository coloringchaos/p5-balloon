var imgBal; 		//variable to hold our baloon image
var bgcol; 			//variable to hold the background color 
var balloon = []; 	//declare balloon array

//preload is used for handling asyncrhonous events
//usually use preload for images, video, audio
//if your code gets stuck in the preload, you can move the loadImage to setup()
function preload(){
	imgBal = loadImage("img/balloon.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);

	//setup an array of balloon objects
	for(var i=0; i<50; i++){
		balloon[i] = new Balloon();
	}
}

function draw() {
	//mapping the mouse x position to a color value
	bgcol = map(mouseX, 0, width, 0, 360);
	background(bgcol, 100, 100);

	// draw the array of balloons objects
	for (var i = 0; i < balloon.length; i++) {
    	balloon[i].display();
    	balloon[i].move();
  	}
}

//creating a balloon class
function Balloon(){
	//set balloon's x and y to be random for each object
	this.x = random(0, width);
	this.y = random(0, height);

	//a function within our class to display the balloon
	this.display = function(){
		imageMode(CENTER);
		image(imgBal, this.x, this.y);
	}

	//a function to jiggle the x and y of the balloon - to make them feel 'alive'
	this.move = function(){
		//offset x and y postition a bit
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}

	//check if mouse is intersecting with balloon
	//this function is actually called in the mousePressed
	this.poke = function(){
		if(mouseX > (this.x -30) && mouseX < (this.x + 30) && mouseY > (this.y -30) && mouseY < (this.y + 30)){
				console.log(this.x + ", " + this.y);
				return true;
		}else{
			return false;
		}
	}
}

function mousePressed() {
	for (var i = 0; i < balloon.length; i++) {
    	if (balloon[i].poke()) {
      		balloon.splice(i, 1);
    	}
  	}
}









