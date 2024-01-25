// p5.js sketch to demonstrate the shortest distance between
// a seed node and various nodes 

// Node class
class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.neighbors = [];
        this.visited = false;
        this.isCentral = false;
        this.shortestDistance = Infinity;
        this.color = 'silver';
    }

    addNeighbor(node) {
        if (!this.neighbors.includes(node)) {
            this.neighbors.push(node);
            if (!node.neighbors.includes(this)) {
                node.neighbors.push(this);
            }
        }
    }

    drawNode() {
        fill(this.color);
        circle(this.x, this.y, 30);
        textSize(12);
        fill(0);
        text(str(round(this.shortestDistance)), this.x-10, this.y+4);
    }

    setColorByDistance() {
        let hue = map(this.shortestDistance, 0, 400, 0, 360);
        this.color = `hsl(${hue}, 100%, 50%)`;
    }
}

// Graph class
class Graph {
    constructor() {
        this.nodes = [];
        this.queue = [];
        this.finished = false;
    }

    addNode(node) {
        this.nodes.push(node);
    }

    connectClosest() {
        this.nodes.forEach(v => {
            let distances = this.nodes.map(w => ({ node: w, dist: dist(v.x, v.y, w.x, w.y) }));
            distances.sort((a, b) => a.dist - b.dist);
            let neighbors = distances.slice(1, 4);
            neighbors.forEach(n => v.addNeighbor(n.node));
        });
    }

    drawGraph() {
        stroke(0);
        this.nodes.forEach(v => {
            v.neighbors.forEach(n => {
                line(v.x, v.y, n.x, n.y);
            });
        });

        this.nodes.forEach(v => v.drawNode());
    }

    nextStep() {
        if (this.finished) return;

        if (this.queue.length === 0 && !this.finished) {
            let central = this.nodes.find(v => v.isCentral);
            if (central) {
                central.visited = true;
                central.shortestDistance = 0;
                central.setColorByDistance();
                this.queue.push(central);
            }
        } else {
            this.queue.sort((a, b) => a.shortestDistance - b.shortestDistance);
            let current = this.queue.shift();
            current.neighbors.forEach(neighbor => {
                let alt = current.shortestDistance + dist(current.x, current.y, neighbor.x, neighbor.y);
                if (alt < neighbor.shortestDistance) {
                    neighbor.shortestDistance = alt;
                    neighbor.setColorByDistance();
                    if (!neighbor.visited) {
                        this.queue.push(neighbor);
                    }
                }
            });
            current.visited = true;
        }

        this.finished = this.nodes.every(v => v.visited);
    }

    restart() {
        this.queue = [];
        this.finished = false;
        this.nodes.forEach(v => {
            v.visited = false;
            v.shortestDistance = Infinity;
            v.color = 'silver';
        });
        let central = this.nodes.find(v => v.isCentral);
        if (central) {
            central.visited = true;
            central.shortestDistance = 0;
            central.color = 'red';
            this.queue.push(central);
        }
    }
}

// Creating the graph
let graph = new Graph();
let canvasWidth = 800;
let canvasHeight = 600;
let drawHeight = 550; // Leave space for buttons

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    // canvas.parent('canvas-container');

    for (let i = 0; i < 20; i++) {
        let x = random(20, canvasWidth - 20);
        let y = random(20, drawHeight - 20);
        let node = new Node(x, y);
        graph.addNode(node);
    }

    let centralNode = graph.nodes[0];
    centralNode.isCentral = true;
    centralNode.color = 'red';
    centralNode.shortestDistance = 0;

    graph.connectClosest();

    createButton('Next Step')
       .position(10, drawHeight + 15)
       .mousePressed(() => { graph.nextStep(); redraw(); });

    createButton('Restart')
       .position(100, drawHeight + 15)
       .mousePressed(() => { graph.restart(); redraw(); });

    noLoop();
}

function draw() {
    background(245);
    graph.drawGraph();
}