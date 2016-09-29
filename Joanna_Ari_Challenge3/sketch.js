
function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  var array = [];
  for(var i = 0; i < 20; i++) {
    array[i] = random(0, 100);
  }
  for(i = 0; i < array.length; i++) {
    fill(20*i, 50*i, random(0, 255), 30*i);
    ellipse(i*40, mouseY, 100, 100);
  }
}