const nodes = [];
const edges = [];

// Generate 20 random nodes
for (let id = 1; id <= 20; id++) {
    nodes.push({ id: id, label: 'Node ' + id, x: Math.random() * 500, y: Math.random() * 500, fixed: true, physics: false });
}

// Function to calculate distance between two nodes
function distance(node1, node2) {
    return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
}

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

const options = {};
const network = new vis.Network(container, data, options);
