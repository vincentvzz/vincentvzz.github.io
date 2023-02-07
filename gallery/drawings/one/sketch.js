function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    background(100, 100, 100);
    noStroke();
  }

  function draw() {
    for (i = 0; i <= windowWidth; i += 20) {
      for (j = 0; j <= windowHeight; j += 20) {
        square(i + 10, j + 10, 10);
        square(i + 10, j + 10, 10);
      }
    }
  }