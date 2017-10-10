//variabelen maken:
var canvaswidth = 800;
var canvasheight = 600;
var balx = 60;
var baly = 30;
var balsize = 30;
var xspeedorgineel = 10;
var yspeedorgineel = 6;
var xspeed = xspeedorgineel;
var yspeed = yspeedorgineel;


function setup() {
  createCanvas(canvaswidth, canvasheight);
  background(230);
}

function draw() {
  background(230);
  bal();
}

function bal() {
  fill(66, 66, 66);
  ellipse(balx, baly, balsize, balsize);
  if (balx + balsize / 2> canvaswidth) {
    xspeed = xspeedorgineel * -1;
  }
  if (baly + balsize / 2 > canvasheight) {
    yspeed = yspeedorgineel * -1;
  }
  if (balx - balsize / 2 < 0) {
    xspeed = xspeedorgineel;
  }
  if (baly - balsize / 2 < 0) {
    yspeed = yspeedorgineel;
  }

  balx = balx + xspeed;
  baly = baly + yspeed;
}
