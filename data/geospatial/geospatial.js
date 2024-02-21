// demo of loading graph data from a JSON file
let graphData;

function preload() {
  graphData = loadJSON('geospatial.json');
}

function setup() {
  createCanvas(500, 300);
  textSize(10);
  background(255);

  // Check if the data is loaded
  if (graphData) {
    // Display counts of vertices and edges
    let verticesCount = graphData.nodes.length;
    let edgesCount = graphData.edges.length;
    text("Number of Vertices: " + verticesCount, 10, 20);
    text("Number of Edges: " + edgesCount, 10, 40);

    // Draw the vertices
    fill(0);
    textSize(16);
    graphData.nodes.forEach(node => {
      fill('blue');
      circle(node.x, node.y, 20);
      fill('black');
      text(node.name, node.x + 12, node.y + 4);
    });

    // Draw the edges and edge labels
    stroke('black');
    strokeWeight(3);
    graphData.edges.forEach(edge => {
      let sourceNode = graphData.nodes.find(node => node.id === edge.source);
      let targetNode = graphData.nodes.find(node => node.id === edge.target);

      // Draw line
      stroke('silver')
      line(sourceNode.x, sourceNode.y, targetNode.x, targetNode.y);
      
      // Draw arrowhead
      drawArrow(sourceNode.x, sourceNode.y, targetNode.x, targetNode.y);

      // Calculate midpoint for label
      let midX = (sourceNode.x + targetNode.x) / 2;
      let midY = (sourceNode.y + targetNode.y) / 2;

      // Draw edge label
      noStroke();
      fill('gray');
      textSize(10);
      text(edge.name, midX, midY);
    });
  } else {
    fill('black');
    text("Loading data...", 10, height / 2);
  }
  noLoop();
}
// Function to draw arrow from (x1, y1) to (x2, y2)
function drawArrow(x1, y1, x2, y2) {
  push(); // Start a new drawing state
  strokeWeight(3);
  fill('black');

  // Calculate the angle from source to target
  let angle = atan2(y2 - y1, x2 - x1);

  // Set the position and rotate to the calculated angle
  translate(x2, y2);
  rotate(angle);

  // Draw the arrowhead as a triangle
  let arrowSize = 10;
  fill('silver');
  triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);

  pop(); // Restore original state
}