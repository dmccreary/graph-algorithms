const nodes = [];
const edges = [];

// Generate 20 random nodes
for (let id = 1; id <= 20; id++) {
    nodes.push({ id: id, label: 'Node ' + id });
}

// Function to calculate distance between two nodes
function distance(node1, node2) {
    return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
}

// Placeholder for node positions
let positions = {};

// Connect each node to the three nearest nodes
nodes.forEach(node => {
    let distances = nodes.map(other => ({ id: other.id, dist: distance(node, other) }));
    distances.sort((a, b) => a.dist - b.dist);

    for (let i = 1; i <= 3; i++) {
        if (node.id !== distances[i].id) {
            edges.push({ from: node.id, to: distances[i].id });
        }
    }
});

// Create a network
const container = document.getElementById('mynetwork');
const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
};

// Create the network
const network = new vis.Network(container, data, options);

// Getting updated positions after stabilization
network.on("stabilizationIterationsDone", function () {
    positions = network.getPositions();
});

// ... [previous code for creating nodes and edges]

// Initial Physics Options
const options = {
    physics: {
        barnesHut: {
            gravitationalConstant: -2000,
            centralGravity: 0.3,
            springLength: 95
        }
    }
};

// Slider event listeners
document.getElementById('gravitationalConstant').addEventListener('input', function() {
    network.setOptions({ physics: { barnesHut: { gravitationalConstant: parseInt(this.value) } } });
});

document.getElementById('centralGravity').addEventListener('input', function() {
    network.setOptions({ physics: { barnesHut: { centralGravity: parseFloat(this.value) } } });
});

document.getElementById('springLength').addEventListener('input', function() {
    network.setOptions({ physics: { barnesHut: { springLength: parseInt(this.value) } } });
});