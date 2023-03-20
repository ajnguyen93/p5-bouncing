let xPos, yPos;
let xDir, yDir;
let sz = 200;
let c1, c2;
let distance;

function setup() {
  createCanvas(windowWidth, windowHeight);

  xPos1 = random(sz / 2, width - sz / 2);
  yPos1 = random(sz / 2, height - sz / 2);

  xPos2 = random(sz / 2, width - sz / 2);
  yPos2 = random(sz / 2, height - sz / 2);

  xDir1 = random(3, -3);
  yDir1 = random(3, -3);

  xDir2 = random(3, -3);
  yDir2 = random(3, -3);
}

function draw() {
  background(255);
  c1 = drawCir1();
  c2 = drawCir2();

  if (xPos1 >= width - sz / 2 || xPos1 <= sz / 2) {
    xDir1 = xDir1 * -1;
  }
  if (yPos1 >= width - sz / 2 || yPos1 <= sz / 2) {
    yDir1 = yDir1 * -1;
  }

  if (xPos2 >= height - sz / 2 || xPos2 <= sz / 2) {
    xDir2 = xDir2 * -1;
  }
  if (yPos2 >= height - sz / 2 || yPos2 <= sz / 2) {
    yDir2 = yDir2 * -1;
  }

  distance = dist(xPos1, yPos1, xPos2, yPos2);
  if (distance < sz) {
    xDir1 = xDir1 * -1;
    yDir1 = yDir1 * -1;
    xDir2 = xDir2 * -1;
    yDir2 = yDir2 * -1;
    sz = sz - 20;
  }
}

function drawCir1() {
  circle(xPos1, yPos1, sz);
  fill(255, 50);
  xPos1 = xPos1 + xDir1;
  yPos1 = yPos1 + yDir1;
}

function drawCir2() {
  circle(xPos2, yPos2, sz);
  fill(255, 20);
  xPos2 = xPos2 + xDir2;
  yPos2 = yPos2 + yDir2;
}
