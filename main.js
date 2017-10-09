//variabelen maken:
var autowidth = 100;
var autoheight = 20;
var autoX = 100;
var autoY = 140;
var wielsize = 20;
var autospeed = 1;

function setup() {
  createCanvas(300, 300);
  background(220);
}

function draw() {
  background(220);
  noStroke();
  auto()
  autoX = autoX + autospeed;
  // lijn
  line(0, 170, 300, 170);
}


function auto() {
  fill(69, 193, 90);
  rect(autoX, autoY, autowidth, autoheight);
  rect(autoX + 10, autoY - 20, autowidth - 20, autoheight);
  stroke(0);
  strokeWeight(2);
  fill(0, 255, 216);
  ellipse(autoX + 20, 160, wielsize, wielsize);
  ellipse(autoX + 80, 160, wielsize, wielsize);
  line(0, 170, 300, 170);
}
