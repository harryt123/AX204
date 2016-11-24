//Loading your sprite
var popplio = new Image();
popplio.src="popplio.jpg";
//Drawing sprite onto canvas
popplio.onload=function(){
	ctx4.drawImage(popplio,200,200,50,90)
};

//Loading your sprite
var takeoutdadog = new Image();
takeoutdadog.src="takeoutdadog.gif";
//Drawing sprite onto canvas
takeoutdadog.onload=function(){
	ctx4.drawImage(takeoutdadog,600,400,100,100)
};

//Loading your sprite
var banana = new Image();
banana.src="banana.jpg";
//Drawing sprite onto canvas
banana.onload=function(){
	ctx4.drawImage(banana,700,100,50,90)
};

//alert("It's working")
var c=document.getElementById('myCanvas');
var ctx=c.getContext("2d");

//start drawing
ctx.beginPath();
//set drawing style
ctx.strokeStyle="red";
//move your pen to the starting point
ctx.moveTo(75,0);
//draw line 1
ctx.lineTo(150,75);
//draw line 2
ctx.lineTo(75,150);
//draw line 3
ctx.lineTo(0,75);
//draw line back to starting point
ctx.closePath();
//actually drawing
ctx.stroke();
//set fill colour
ctx.fillStyle="green";
//actually fill the shape
ctx.fill();

var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");

ctx2.beginPath();
ctx2.strokeStyle="blue";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="red";
ctx2.fill();

var c3=document.getElementById('myCanvas3');
var ctx3=c3.getContext("2d");

ctx3.beginPath();
ctx3.arc(150,150,80,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="yellow";
ctx3.fill();

var c4=document.getElementById('myCanvas4');
var ctx4=c4.getContext("2d");

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(0,0);
ctx4.lineTo(0,500);
ctx4.lineTo(800,500);
ctx4.lineTo(800,0);
ctx4.closePath();
ctx4.fillStyle="cyan";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="white";
ctx4.moveTo(0,375);
ctx4.lineTo(800,375);
ctx4.lineTo(800,500);
ctx4.lineTo(0,500);
ctx4.closePath();
ctx4.fillStyle="green";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(400,375);
ctx4.lineTo(455,375);
ctx4.lineTo(480,500);
ctx4.lineTo(370,500);
ctx4.lineTo(385,375);
ctx4.stroke();
ctx4.fillStyle="grey";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(400,500);
ctx4.lineTo(400,375);
ctx4.lineTo(440,375);
ctx4.lineTo(455,500);
ctx4.closePath();
ctx4.fillStyle="grey";
ctx4.fill();

ctx4.beginPath();
ctx4.arc(100,100,50,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="yellow";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(770,375);
ctx4.lineTo(770,275);
ctx4.lineTo(570,275);
ctx4.lineTo(570,375);
ctx4.closePath();
ctx4.fillStyle="grey";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(670,200);
ctx4.lineTo(800,275);
ctx4.lineTo(540,275);
ctx4.closePath();
ctx4.fillStyle="peru";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(590,295);
ctx4.lineTo(630,295);
ctx4.lineTo(630,335);
ctx4.lineTo(590,335);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.strokeStyle="black";
ctx4.moveTo(750,375);
ctx4.lineTo(750,295);
ctx4.lineTo(710,295);
ctx4.lineTo(750,295);
ctx4.closePath();
ctx4.fillStyle="brown";
ctx4.fill();

ctx4.beginPath();
ctx4.arc(740,335,5,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="yellow";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(50,375);
ctx4.lineTo(320,375);
ctx4.lineTo(320,250);
ctx4.lineTo(50,250);
ctx4.closePath();
ctx4.fillStyle="grey";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(70,270);
ctx4.lineTo(100,270);
ctx4.lineTo(100,300);
ctx4.lineTo(70,300);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(120,270);
ctx4.lineTo(150,270);
ctx4.lineTo(150,300);
ctx4.lineTo(120,300);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(170,270);
ctx4.lineTo(200,270);
ctx4.lineTo(200,300);
ctx4.lineTo(170,300);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(220,270);
ctx4.lineTo(250,270);
ctx4.lineTo(250,300);
ctx4.lineTo(220,300);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(270,270);
ctx4.lineTo(300,270);
ctx4.lineTo(300,300);
ctx4.lineTo(270,300);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(70,320);
ctx4.lineTo(100,320);
ctx4.lineTo(100,350);
ctx4.lineTo(70,350);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(120,320);
ctx4.lineTo(150,320);
ctx4.lineTo(150,350);
ctx4.lineTo(120,350);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(170,320);
ctx4.lineTo(200,320);
ctx4.lineTo(200,350);
ctx4.lineTo(170,350);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(220,320);
ctx4.lineTo(250,320);
ctx4.lineTo(250,350);
ctx4.lineTo(220,350);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(270,320);
ctx4.lineTo(300,320);
ctx4.lineTo(300,350);
ctx4.lineTo(270,350);
ctx4.closePath();
ctx4.fillStyle="white";
ctx4.fill();