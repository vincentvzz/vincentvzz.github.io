let row = 50;
let col = 50;
let radius = 30;
let windowW = 0;
let windowH = 0;
let targetRow = 0;
let targetCol = 0;
let hit;

function preload() {
  hit = loadSound("mixkit-retro-game-notification-212.mp3");
}

function setup() {
  windowW = windowWidth * 0.8;
  windowH = windowHeight * 0.8;
  createCanvas(windowW, windowH);
  background(100, 100, 100);
  frameRate(30);
  // buttons
  circle(50, 20, 30);
  circle(20, 50, 30);
  circle(50, 80, 30);
  circle(80, 50, 30);
  fill(50, 50, 50);
  circle(col, row, radius);
  targetRow = Math.floor(Math.random() * windowH);
  targetCol = Math.floor(Math.random() * windowW);
  fill(150, 200, 150);
  square(targetCol, targetRow, 30);
}

function draw() {
  if (mouseIsPressed) {
    // up, left, down, right
    if (dist(mouseX, mouseY, 50, 20) < 30) {
      loadBackground();
      row = row - (1 * deltaTime / 10);
      if (row <= 0) {
        row = windowH;
      }
      fill(50, 50, 50);
      circle(col, row, radius);
    } else if (dist(mouseX, mouseY, 20, 50) < 30) {
      loadBackground();
      col = col - (1 * deltaTime / 10);
      if (col <= 0) {
        col = windowW;
      }
      fill(50, 50, 50);
      circle(col, row, radius);
    } else if (dist(mouseX, mouseY, 50, 80) < 30) {
      loadBackground();
      row = row + (1 * deltaTime / 10);
      if (row >= windowH) {
        row = 0;
      }
      fill(50, 50, 50);
      circle(col, row, radius);
    } else if (dist(mouseX, mouseY, 80, 50) < 30) {
      loadBackground();
      col = col + (1 * deltaTime / 10);
      if (col >= windowW) {
        col = 0;
      }
      fill(50, 50, 50);
      circle(col, row, radius);
    }
  }
  if (col <= targetCol + 15 && col >= targetCol - 15 && row <= targetRow + 15 && row >= targetRow - 15) {
    radius += 20;
    targetRow = Math.floor(Math.random() * windowH);
    targetCol = Math.floor(Math.random() * windowW);
    hit.play();
  }
  fill(150, 200, 150);
  square(targetCol, targetRow, 30);
}

function loadBackground() {
  fill(255, 255, 255);
  background(100, 100, 100);
  circle(50, 20, 30);
  circle(20, 50, 30);
  circle(50, 80, 30);
  circle(80, 50, 30);
}