//variabelen maken:
var autowidth = 100;
var autoheight = 20;
var autoX = 1;
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
