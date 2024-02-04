// demo of loading graph data from a JSON file
let graphData;

function preload() {
  graphData = loadJSON('graph.json');
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
      text(node.name, node.x + 12, node.y + 4);
    });

    // Draw the edges
    stroke('black');
    strokeWeight(3);
    graphData.edges.forEach(edge => {
      let sourceNode = graphData.nodes.find(node => node.name === edge.source);
      let targetNode = graphData.nodes.find(node => node.name === edge.target);
      line(sourceNode.x, sourceNode.y, targetNode.x, targetNode.y);
    });
  } else {
    fill('black');
    text("Loading data...", 10, height / 2);
  }
}