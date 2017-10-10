//variabelen maken:
var canvaswidth = 800;
var canvasheight = 600;
var balx = 60;
var baly = 60;
var balsize = 30;
var xspeedorgineel = 1;
var yspeedorgineel = 1;
var xspeed = xspeedorgineel;
var yspeed = yspeedorgineel;


function setup() {
  createCanvas(canvaswidth, canvasheight);
  background(230);
}

function draw() {
  bal();
  background(230);
}

function bal() {
  fill(66, 66, 66);
  ellipse(balx, baly, balsize, balsize);
  if (balx + balsize > canvaswidth) {
    xspeed = xspeedorgineel * -1;
  }
  if (baly + balsize > canvasheight) {
    yspeed = yspeedorgineel * -1;
  }
  if (balx < 0) {
    xspeed = xspeedorgineel;
  }
  if (baly < 0) {
    yspeed = yspeedorgineel;
  }

  balx = balx + xspeed;
  baly = baly + yspeed;
}
