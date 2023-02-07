function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  background(100, 100, 100);
  noStroke();
  for (i = 0; i <= windowWidth; i += 10) {
    for (j = 0; j <= windowHeight; j += 10) {
      if (Math.floor(Math.random() * 2) == 0) {
        square(i, j, 10);
      }
    }
  }
}

function draw() {

}