// neighbors are only outgoing arcs
let cities = {
    "New York": { x: 470, y: 120, neighbors: ["Chicago"] },
    "Los Angeles": { x: 60, y: 260, neighbors: ["San Francisco"] },
    "Chicago": { x: 300, y: 200, neighbors: ["Miami"] },
    "Phoenix": { x: 150, y: 310, neighbors: ["Dallas", "San Diego"] },
    "Miami": { x: 510, y: 400, neighbors: ["New York"] },
    "San Diego": { x: 70, y: 420, neighbors: ["Los Angeles"] },
    "Dallas": { x: 270, y: 310, neighbors: ["Chicago"] },
    "Seattle": { x: 50, y: 110, neighbors: ["Chicago"] },
    "Minneapolis": { x: 250, y: 100, neighbors: ["Chicago", "Seattle", "New York"] },
    "San Francisco": { x: 90, y: 200, neighbors: ["Seattle", "San Diego"] }
  };
  
  function setup() {
    const canvas = createCanvas(590, 440);
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);
    textSize(14);
    calculateDegrees();
  }
  
  function calculateDegrees() {
    // Initialize degrees
    for (let city in cities) {
      cities[city].inDegree = 0;
      cities[city].outDegree = 0;
      cities[city].totalDegree = 0;
    }
  
    // Calculate total degree (in-degree + out-degree)
    for (let city in cities) {
      for (let neighbor of cities[city].neighbors) {
        cities[city].outDegree++; // Out-degree
        cities[neighbor].inDegree++; // In-degree
  
      }
    }
     for (let city in cities) {
          cities[city].totalDegree =
          cities[city].inDegree +
          cities[city].outDegree;
     }
  }
  
  function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 9;
    // stop at circle 
    translate(vec.mag() - arrowSize - 15, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }
  
  function draw() {
    background(255);
    
    for (let city in cities) {
      let x = cities[city].x;
      let y = cities[city].y;
  
      // Draw arrows to neighbors
      for (let neighbor of cities[city].neighbors) {
        let neighborX = cities[neighbor].x;
        let neighborY = cities[neighbor].y;
        let vec = createVector(neighborX - x, neighborY - y);
        drawArrow(createVector(x, y), vec, 'black');
      }
  
  
  
    }
    for (let city in cities) {
      let x = cities[city].x;
      let y = cities[city].y;
      fill('blue');
      circle(x,y,30);
    }
    // text
    for (let city in cities) {
      let x = cities[city].x;
      let y = cities[city].y;
      // Draw total degree of city
      noStroke();
      fill('lightblue');
      rect(x+22, y-23, 80, 20);
      fill('black');
      textAlign(LEFT);
      text('i:'+cities[city].inDegree + ' ' +
           ' o:' + cities[city].outDegree + ' ' + 
           ' t:' + cities[city].totalDegree, x + 29, y - 7);
    }
}
  