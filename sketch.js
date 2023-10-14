let mouthShape, eye, pupil, food;
let bg = 400;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  mouthShape = { x: bg / 2, y: bg / 2, w: bg / 4, h: 200, r: 30 };
  eye = { x: bg / 4, y: bg / 4, d: bg / 5 };
  pupil = { x: eye.x, y: eye.y, d: bg / 10 };
  food = { d: 70, color: color("green") };
}

function draw() {
  background(220);

  fill(0);
  let md = dist(mouseX, mouseY, bg / 2, bg / 2);
  let mouthWidth = (bg / 3 - md) > bg / 4 ? (bg / 3 - md) : bg / 4;
  let mouthHeight = (bg / 2.5 - md) > bg / 20 ? (bg / 2.5 - md) : bg / 20;
  rect(mouthShape.x, mouthShape.y, mouthWidth, mouthHeight, mouthShape.r);

  fill(255);
  circle(eye.x, eye.y, eye.d);
  circle(bg - eye.x, eye.y, eye.d);

  fill(0);
  circle(pupil.x, pupil.y, pupil.d);
  circle(bg - pupil.x, pupil.y, pupil.d);

  fill(food.color);
  circle(mouseX, mouseY, food.d);
}