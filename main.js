//variabelen maken:
var canvaswidth = window.innerWidth - 30;
var canvasheight = window.innerHeight - 30;
var bal1;
var xspeedorgineel;
var yspeedorgineel;
var ballen = [];
var aantalballen = 1;
var balstraal = 40;

function setup() {
  //frameRate(25)
  createCanvas(canvaswidth, canvasheight);
  background(230);
  for (var i = 0; i < aantalballen; i++){
    var cr = Math.floor(Math.random() * 255);
    var cg = Math.floor(Math.random() * 255);
    var cb = Math.floor(Math.random() * 255);
    xspeedorgineel = Math.floor(Math.random() * 30 + 10);;
    yspeedorgineel = Math.floor(Math.random() * 30 + 10);;
    balletje1 = new Ball(20, 6, balstraal, xspeedorgineel, yspeedorgineel, cr, cg, cb); //Maak een nieuwe instantie van Bal()
    // balletje2 = new Ball(2, 21, 30, 2, 1); //Maak een nieuwe instantie van Bal()

    ballen.push(balletje1); //Push voegt de bal aan het einde van het array toe
  }
}

function draw() {
  background(255, 255, 255, 10);
  console.log(frameRate())
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.beweeg();
  }
}

function Ball(_x, _y, _straal, _xspeed, _yspeed, _cr, _cg, _cb) {
  this.x = _x;
  this.y = _y;
  this.straal = _straal;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;

  this.teken = function() {
    noStroke();
    fill(_cr, _cg, _cb);
    ellipse(this.x, this.y, this.straal, this.straal);
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
