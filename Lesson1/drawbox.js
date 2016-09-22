var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

// ctx.moveTo(0,0);
// ctx.lineTo(100,200);
// ctx.stroke();

ctx.fillStyle = "rgb(200,250,190)";
ctx.fillRect(100,100,100,100);
ctx.strokeRect(80,80,140,140);
ctx.clearRect(120,120,60,60);

var c2 = document.getElementById('canvasTwo');
var ctx2 = c2.getContext('2d');

ctx2.fillStyle = "rgb(255,0,0)";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(150,0,150,150);
ctx2.clearRect(0,150,150,150);

var c3 = document.getElementById('canvasThree');
var ctx3 = c3.getContext('2d');

ctx3.fillStyle = "rgb(0,255,0)";
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(20,160,120,120);
ctx3.clearRect(160,160,120,120);