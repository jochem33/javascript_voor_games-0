//variabelen maken:
var canvaswidth = 800;
var canvasheight = 600;
var bal1;
var xspeedorgineel = 40;
var yspeedorgineel = 10;

function setup() {
  createCanvas(canvaswidth, canvasheight);
  background(230);
  balletje1 = new balfunc(40, 40, 20, 5, 3);
  balletje1.x = 40;
  balletje1.y = 40;
  balletje1.straal = 20;
  balletje1.xspeed = xspeedorgineel;
  balletje1.yspeed = yspeedorgineel;
}

function draw() {
  background(200);
  balletje1.teken();
  balletje1.beweeg();
}

function balfunc(x, y, straal, xspeed, yspeed) {
  this.x;
  this.y;
  this.straal;
  this.xspeed;
  this.yspeed;

  this.teken = function() {
    ellipse(this.x, this.y, this.straal, this.straal)
  }

  this.beweeg = function() {
    if (this.x + this.straal / 2> canvaswidth) {
      this.xspeed = xspeedorgineel * -1;
    }
    if (this.y + this.straal / 2 > canvasheight) {
      this.yspeed = yspeedorgineel * -1;
    }
    if (this.x - this.straal / 2 < 0) {
      this.xspeed = xspeedorgineel;
    }
    if (this.y - this.straal / 2 < 0) {
      this.yspeed = yspeedorgineel;
    }
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
}
