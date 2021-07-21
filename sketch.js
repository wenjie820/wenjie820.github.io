let nameParam = "";
let center;
let fore;
let back;

function setup() {
  // createCanvas(500, 500);
  let canvas = createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);  
  textSize(26);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  
  fill(255);
  noStroke();
  
  back = loadGif("data/background.gif");
  center = loadImage("data/center.png");
  fore = loadImage("data/foreground.png");
  
  nameParam = getQueryString("name");
  if(nameParam == null) {
    nameParam = "";
  }

  document.body.style.overflow="hidden";
  document.body.addEventListener("touchmove", function (e) {
    e.preventDefault();
  }, {passive: false});
}

function draw() {
  background(0);
  
  image(back, width/2, height/2, back.width*height/back.height, height);  
  image(fore, width/2, height/2, fore.width*height/fore.height, height);
  image(center, width/2, height/2, center.width*height/fore.height, center.height*height/fore.height);  
  text(nameParam, width/2, height/2);
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if(r != null) {
    return decodeURI(r[2]);
  }
  return null;
}
