// Global canvas size variables
let canvasWidth = 550;
let canvasHeight = 450;
let drawHeight = 400;    // Height for the drawing region
let selectedNode = null; // To keep track of the clicked node

// Node and graph class definitions
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.outgoing = [];  // Outgoing links
    this.incoming = [];  // Incoming links
    this.pageRank = 1.0; // Initial PageRank value
    this.radius = 20;    // Radius for hit detection and display
  }

  addLink(node) {
    this.outgoing.push(node);
    node.incoming.push(this);
  }

  drawNode() {
    let diameter = map(this.pageRank, 0, 2, 10, 50); // Scale node size by PageRank
    fill(100, 100, 255, 50);
    ellipse(this.x, this.y, diameter, diameter);
  }

  drawEdges() {
    this.outgoing.forEach(node => {
      drawArrow(this, node, 'rgba(0, 0, 0, 0.5)');
    });
  }

  isClicked() {
    return dist(mouseX, mouseY, this.x, this.y) < this.radius && mouseY < drawHeight;
  }

  getIncomingPageRanks() {
    return this.incoming.map(node => node.pageRank.toFixed(2));
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.damping = 0.85; // Damping factor for PageRank
  }

  addNode(node) {
    this.nodes.push(node);
  }

  connectRandomly() {
    // Connect each node to some other random nodes with directed edges
    this.nodes.forEach(v => {
      let numConnections = floor(random(1, 4)); // Each node will have 1 to 3 outgoing links
      for (let i = 0; i < numConnections; i++) {
        let neighbor = random(this.nodes);
        if (v !== neighbor) {
          v.addLink(neighbor);
        }
      }
    });
  }

  drawGraph() {
    // Draw nodes and their edges
    this.nodes.forEach(v => {
      v.drawEdges();
      v.drawNode();
    });
  }

  getNodeAtMouse() {
    return this.nodes.find(node => node.isClicked());
  }

  updatePageRank() {
    let newRanks = new Array(this.nodes.length).fill(0);
    this.nodes.forEach((v, i) => {
      v.incoming.forEach(n => {
        newRanks[i] += n.pageRank / n.outgoing.length;
      });
      newRanks[i] *= this.damping;
      newRanks[i] += (1 - this.damping) / this.nodes.length;
    });

    this.nodes.forEach((v, i) => {
      v.pageRank = newRanks[i];
    });
  }
}

// Function to draw an arrow representing a directed edge
function drawArrow(from, to, color) {
  push();
  stroke(color);
  fill(color);
  let angle = atan2(to.y - from.y, to.x - from.x);
  line(from.x, from.y, to.x, to.y);
  translate(to.x, to.y);
  rotate(angle);
  let arrowSize = 7;
  translate(-arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

let graph = new Graph();

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);
  textSize(16);
  background(245);

  // Create nodes within the drawing region
  for (let i = 0; i < 20; i++) {
    let x = random(20, canvasWidth - 20);
    let y = random(20, drawHeight - 20);
    let node = new Node(x, y);
    graph.addNode(node);
  }

  // Connect nodes with directed edges
  graph.connectRandomly();

  // Add button
  let button = createButton('Update PageRank');
  button.position(5, canvasHeight - 60);
  button.mousePressed(() => { graph.updatePageRank(); redraw(); });

  // Draw the graph
  noLoop();
}

function draw() {
  background(245);
  graph.drawGraph();

  // Display information for the selected node in the control area
  if (selectedNode) {
    let incomingPageRanks = selectedNode.getIncomingPageRanks().join(", ");
    let info = `PageRank: ${selectedNode.pageRank.toFixed(2)}\nIncoming: ${selectedNode.incoming.length}\nIncoming PageRanks: [${incomingPageRanks}]`;
    fill(0);
    text(info, 140, canvasHeight - 45);
  }
}

function mousePressed() {
  if (mouseY < drawHeight) {
    selectedNode = graph.getNodeAtMouse(); // Update the selected node based on mouse position
    redraw();
  }
}
