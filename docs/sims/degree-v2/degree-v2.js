// Network Graph Degree Demo
let canvasWidth = 450;
let drawingHeight = 450;
let xCenter = canvasWidth / 2;
let yCenter = drawingHeight / 2;
let controlRegionHeight = 60;
let nSlider, degreeSlider;
let leftMargin = 100;

function setup() {
  createCanvas(canvasWidth, drawingHeight + controlRegionHeight);
  textSize(16);
  nSlider = createSlider(4, 20, 10, 1).position(leftMargin, canvasWidth + 10);
  nSlider.size(canvasWidth-leftMargin);
  degreeSlider = createSlider(1, 20, 4, 1).position(leftMargin, canvasWidth + 30);
  degreeSlider.size(canvasWidth-leftMargin);
}

function draw() {
  fill('aliceblue');
  rect(0,0,canvasWidth, drawingHeight);
  fill('white');
  rect(0,drawingHeight,canvasWidth, controlRegionHeight);
  drawNetwork(xCenter, yCenter, 200, nSlider.value());
  drawLines(xCenter, yCenter, 200, nSlider.value(), degreeSlider.value());
  degreeSlider.attribute('max', nSlider.value()); // Ensure degreeSlider max does not exceed nSlider value
  
  // Draw labels and values
  noStroke();
  text('Nodes: ' + nSlider.value(), 10, drawingHeight + 20);
  text('Degree: ' + (degreeSlider.value()+1), 10, drawingHeight + 40);

}

function drawNetwork(x, y, largeCircleRadius, n) {
  let angle = TWO_PI / n;
  stroke(0);
  fill(255);
  // ellipse(x, y, largeCircleRadius * 2, largeCircleRadius * 2); // Draw large circle
  for (let i = 0; i < n; i++) {
    let xOff = cos(angle * i) * largeCircleRadius;
    let yOff = sin(angle * i) * largeCircleRadius;
    fill(100);
    circle(x + xOff, y + yOff, 20); // Draw small circles
  }
}

function drawLines(x, y, largeCircleRadius, n, degree) {
  let angle = TWO_PI / n;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= degree; j++) {
      let iAngle = angle * i;
      let jAngle = angle * ((i + j) % n); // Wrap around the circle
      let x1 = cos(iAngle) * largeCircleRadius + x;
      let y1 = sin(iAngle) * largeCircleRadius + y;
      let x2 = cos(jAngle) * largeCircleRadius + x;
      let y2 = sin(jAngle) * largeCircleRadius + y;
      stroke(0, 102, 153);
      line(x1, y1, x2, y2); // Draw line between vertices
    }
  }
}
