// demo of loading graph data from a JSON file
let graphData;

function preload() {
  graphData = loadJSON('graph.json'); // Make sure to replace with your actual JSON file name
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);

  // Check if the data is loaded
  if (graphData) {
    // Draw the cities
    fill(0);
    graphData.nodes.forEach(node => {
      fill('blue');
      node.x = round(random(10, 390));
      node.y = round(random(10, 390));
      circle(node.x, node.y, 20);
      fill('black');
      text(city.name, city.x + 12, city.y + 4);
    });

    // Draw the edges
    stroke('black');
    strokeWeight(3);
    graphData.edges.forEach(edge => {
      let fromCity = graphData.cities.find(city => city.name === edge.from);
      let toCity = graphData.cities.find(city => city.name === edge.to);
      line(fromCity.x, fromCity.y, toCity.x, toCity.y);
    });
  } else {
    fill('black');
    text("Loading data...", 10, height / 2);
  }
}