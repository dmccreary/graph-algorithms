// Animate Schema matching lines
var dot;
var dotArray = [];
var dotCount = 10;
var dew = 60; // data element width
var deh = 25; // data element height
var deg = 20; // data element gap
var tempX;
var tempY;
var angle = 0; // percent done with animate
var top_margin = 60;
var src_col_x = 50;
var tar_col_x = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // we want this [2, 3, 1, 6, 8, 9, 5, 7, 0, 4]
  let shuffledArray = shuffleArray(dotCount);
  noFill(0);
  stroke(50, 50, 200);
  strokeWeight(5);

  for (let i = 0; i < dotCount; i++) {
    let targetNum = shuffledArray[i];
    dotArray.push(new Dot(src_col_x, top_margin + i*(deh+deg), 
                          tar_col_x, top_margin + targetNum*(deh+deg)));
  }

}

function draw() {
  background(245);
  fill('Black');
  noStroke();
  textSize(24);
  text('Source', 20, 30);
  text('Target', tar_col_x+30, 30);
  stroke('blue');

  for (let i = 0; i < dotArray.length; i++) {
    dotArray[i].showDots();
  }

  for (let j = 0; j < dotArray.length; j++) {
    dotArray[j].showLines();
    dotArray[j].animateLines();
  }

}

// really a Line segment between two points
class Dot {

  constructor(startX, startY, endX, endY) {
    this.start = createVector(startX, startY);
    this.end = createVector(endX, endY);
    this.vertexArray = [];
  }

  showDots() {
    // why this???  no frame reference change?
    push();
    
    // left source
    fill('green');
    noStroke();
    // x,y,w,h, round corners
    rect(this.start.x-30, this.start.y-10, dew, deh, 5);
    
    // right target
    fill('plum');
    rect(this.end.x+30, this.end.y-10, dew, deh, 5);
    
    pop();
  }

  showLines() {
    beginShape();
    for (let i = 0; i < this.vertexArray.length; i++) {
      vertex(this.vertexArray[i].x+dew/2, this.vertexArray[i].y+3);
    }
    endShape();
  }

  animateLines() {
    tempX = map(angle, 0, 100, this.start.x, this.end.x, 1);
    tempY = map(angle, 0, 100, this.start.y, this.end.y, 1);
    this.vertexArray.push(createVector(tempX, tempY));
    // speed 
    angle += 0.06;
  }

}

// return a random shuffel of numbers
function shuffleArray(numItems) {
    let array = [];
    // Fill the array with numbers from 0 to numItems
    for (let i = 0; i < numItems; i++) {
        array.push(i);
    }

    // Fisher-Yates Shuffle Algorithm
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index lower than the current index
        let j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

