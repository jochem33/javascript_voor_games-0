//variabelen maken:
var canvaswidth = 800;
var canvasheight = 600;
var bal1;
var xspeedorgineel = 5;
var yspeedorgineel = 1;
var ballen = [];
var aantalballen = 50;

function setup() {
  createCanvas(canvaswidth, canvasheight);
  background(230);
  for (var i = 0; i < aantalballen; i++){
    balletje1 = new Ball(5, 6, 10, xspeedorgineel, xspeedorgineel); //Maak een nieuwe instantie van Bal()
    // balletje2 = new Ball(2, 21, 30, 2, 1); //Maak een nieuwe instantie van Bal()

    ballen.push(balletje1); //Push voegt de bal aan het einde van het array toe
  }
}

function draw() {
  background(200);

  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.beweeg();
  }
}

function Ball(_x, _y, _straal, _xspeed, _yspeed) {
  this.x = _x;
  this.y = _y;
  this.straal = _straal;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;

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
