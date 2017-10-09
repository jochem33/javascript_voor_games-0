//variabelen maken:
var autowidth = 100;
var autoheight = 20;
var autoX = 1;
var autoY = 140;
var wielsize = 20;
var autospeedorgineel = 3;
var autospeed = autospeedorgineel;
var canvaswidth = 300;

function setup() {
  createCanvas(canvaswidth, 300);
  background(220);
}

function draw() {
  background(220);
  noStroke();
  auto()
  autoX = autoX + autospeed;
  // lijn
  line(0, 170, 300, 170);
  if (autoX < 0) {
    autospeed = autospeedorgineel;
  }
  else if (autoX + autowidth > canvaswidth) {
    autospeed = autospeedorgineel * -1;
  }
}


function auto() {
  fill(84,84,84);
  rect(autoX, autoY, autowidth, autoheight);
  ellipse(autoX + 40, autoY - 5, autowidth / 2, autoheight * 2);
  rect(autoX + 30, autoY - 15, autowidth / 1.5, autoheight / 2);
  stroke(0);
  strokeWeight(2);
  fill(0, 255, 216);
  ellipse(autoX + 10, 160, wielsize, wielsize);
  ellipse(autoX + 50, 160, wielsize, wielsize);
  ellipse(autoX + 90, 160, wielsize, wielsize);
  line(0, 170, 300, 170);
}
