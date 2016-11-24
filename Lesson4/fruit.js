//Declare all variables at the top
var canvas;
var ctx;
//Starting position and radius of  player sprite
var x = 250;
var y = 250;
var r = 20;
//Holding the speed in the x and y directions
var mx = 0;
var my = 0;
//Save position of cards
var goodX;
var goodY;
var badX;
var badY;
var spriteWidth = 50;
var spriteHeight = 50;
//Boolean to keep track of whether collision is occuring
var goodCollision = false;
var badCollision = false;
//Width and height of our canvas
var WIDTH = 500;
var HEIGHT = 500;
var score = 0;

function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "blue";
	ctx.fill();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawGood() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var good = new Image();
	good.src = "elvish.png";
	ctx.drawImage(good, goodX, goodY, 50, 50);
}

function drawBad() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var bad = new Image();
	bad.src = "altar.png";
	ctx.drawImage(bad, badX, badY, 50, 50);
}

function init() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	//Put sprites in random position
	badX = Math.floor(Math.random()*450);
	goodX = Math.floor(Math.random()*450);
	badY = Math.floor(Math.random()*450);
	goodY = Math.floor(Math.random()*450);
	//Wait for keyboard event
	window.onkeydown =  keydownControl;
	//set draw() to run
	return setInterval(draw,10);
}

function draw() {
	//Call clear() to wipe canvas
	clear();
	circle(x,y,r);
	drawBad();
	drawGood();
	collisionCheck();
	collisionHandle();
	//tell sprite to bounce off walls
	if (x+mx > WIDTH-r || x+mx<0){
		mx= -mx;
	}
	if (y+my > HEIGHT-r || y+my<0){
		my= -my;
	}

	x+=mx;
	y+=my;
	//move the sprite
	//check for collisions
}

function collisionCheck() {
	if ( (x >= badX) && (x <= badX + spriteWidth) && (y >= badY) && (y <= badY + spriteHeight)) {
		badCollision = true;
	}
	else {
		badCollision = false;
	}

	if ( (x >= goodX) && (x <= goodX + spriteWidth) && (y >= goodY) && (y <= goodY + spriteHeight)) {
		goodCollision = true;
	}
	else {
		goodCollision = false;
	}
}

//Handles what happenes if there is a collision
function collisionHandle() {
	if (goodCollision == true) {
		score+=1;
		document.getElementById("score").innerHTML = score;
		goodX = Math.floor(Math.random()*450);
		goodY = Math.floor(Math.random()*450);
	}
	if (badCollision == true) {
		score-=1;
		document.getElementById("score").innerHTML = score;
		badX = Math.floor(Math.random()*450);
		badY = Math.floor(Math.random()*450);
	}
}

function keydownControl(e) {
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	}
	else if (e.keyCode == 39){
		mx = +4;
		my = 0;
	}
	else if (e.keyCode == 38){
		mx = 0;
		my = -4;
	}
	else if (e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

init();