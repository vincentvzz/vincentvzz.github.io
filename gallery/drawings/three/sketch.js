let row = 0;
let col = 0;
let direction_h = 1;
let direction_v = 1;
let windowW = 0;
let windowH = 0;

function setup() {
  windowW = windowWidth * 0.8;
  windowH = windowHeight * 0.8;
  createCanvas(windowW, windowH);
  background(100, 100, 100);
  frameRate(30);
  row = Math.floor(Math.random() * windowH);
  col = Math.floor(Math.random() * windowW);
  square(col, row, 50);
}

function draw() {
  background(100, 100, 100);

  if (row >= windowH) {
    direction_h = -1;
  }
  if (row <= 0) {
    direction_h = 1;
  }
  if (col >= windowW) {
    direction_v = -1;
  }
  if (col <= 0) {
    direction_v = 1;
  }
  row = row + direction_h * (deltaTime / 30);
  col = col + direction_v * (deltaTime / 30);
  square(col, row, 50);
}