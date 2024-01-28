// weighted graph example
// I used ChatGPT to generate sample cities and moved them around
let cities = {
    "New York": { x: 520, y: 120 },
    "Los Angeles": { x: 80, y: 260 },
    "Chicago": { x: 300, y: 200 },
    "Phoenix": { x: 150, y: 310 },
    "Miami": { x: 510, y: 400 },
    "San Diego": { x: 70, y: 420 },
    "Dallas": { x: 270, y: 310 },
    "Seattle": { x: 50, y: 110 },
    "Minneapolis": { x: 250, y: 100 },
    "San Francisco": { x: 160, y: 200 }
  };
  
  function setup() {
    const canvas = createCanvas(550, 440);
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);
    textSize(14);
    calculateNeighbors();
  }
  
  function draw() {
    background(255);
    
    for (let city in cities) {
      // draw lines to nearest city
      for (let neighbor of cities[city].neighbors) {
        let neighborX = cities[neighbor].x;
        let neighborY = cities[neighbor].y;
        stroke(0);
        // need to put
        line(cities[city].x, cities[city].y, neighborX, neighborY);
        
        let midX = (cities[city].x + neighborX) / 2;
        let midY = (cities[city].y + neighborY) / 2;
        let distance = dist(cities[city].x, cities[city].y, neighborX, neighborY);
        // white box belind weight
        noStroke();
        fill('white');
        rect(midX-14, midY-8, 28, 16);
        
        fill('black');
        textAlign(CENTER,CENTER);
        text(nf(distance, 0, 0), midX, midY);
      }
    }
    for (let city in cities) {
      fill(0,100,255);
      circle(cities[city].x, cities[city].y, 20);
    }
    
    noLoop(); // Static drawing
  }
  
  function calculateNeighbors() {
    for (let city in cities) {
      let distances = [];
      for (let otherCity in cities) {
        if (otherCity !== city) {
          let d = dist(cities[city].x, cities[city].y, cities[otherCity].x, cities[otherCity].y);
          distances.push({ city: otherCity, distance: d });
        }
      }
      distances.sort((a, b) => a.distance - b.distance);
      cities[city].neighbors = distances.slice(0, 3).map(d => d.city);
    }
  }
  