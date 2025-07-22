// Initialize variables
var nodes = new vis.DataSet();
var edges = new vis.DataSet();
var network;
var bfsOrder = [];
var currentStep = -1;
var maxSteps = 0;
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'];

// Initialize the network
function initNetwork() {
    nodes.clear();
    edges.clear();
    bfsOrder = [];
    currentStep = -1;
    maxSteps = 0;
    document.getElementById('status').innerHTML = 'Status: Ready';

    // Generate 30 nodes at random positions with a border of 30
    var nodeCount = 30;
    var positions = [];
    for (var i = 1; i <= nodeCount; i++) {
        var x = Math.random() * (800 - 60) + 30;
        var y = Math.random() * (600 - 60) + 30;
        positions.push({id: i, x: x, y: y});
        nodes.add({
            id: i,
            label: '' + i,
            shape: 'circle',
            size: 20,
            x: x,
            y: y,
            color: {background: 'white'}
        });
    }

    // Connect each node to its 2 or 3 closest nodes
    for (var i = 0; i < positions.length; i++) {
        var nodeA = positions[i];
        var distances = [];
        for (var j = 0; j < positions.length; j++) {
            if (i !== j) {
                var nodeB = positions[j];
                var dx = nodeA.x - nodeB.x;
                var dy = nodeA.y - nodeB.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                distances.push({id: nodeB.id, distance: distance});
            }
        }
        distances.sort(function(a, b) { return a.distance - b.distance; });
        var connections = Math.floor(Math.random() * 2) + 2; // 2 or 3 closest nodes
        for (var k = 0; k < connections; k++) {
            edges.add({
                from: nodeA.id,
                to: distances[k].id
            });
        }
    }

    var container = document.getElementById('network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        physics: false,
        interaction: {
            dragNodes: false,
            zoomView: false,
            dragView: false
        },
        layout: {
            randomSeed: undefined
        }
    };
    network = new vis.Network(container, data, options);
}

// Breadth-First Search Algorithm
function bfs(startNode) {
    var visited = {};
    var queue = [];
    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
        var nodeId = queue.shift();
        bfsOrder.push(nodeId);
        var connectedNodes = network.getConnectedNodes(nodeId);
        for (var i = 0; i < connectedNodes.length; i++) {
            var neighbor = connectedNodes[i];
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    maxSteps = bfsOrder.length;
}

// Function to color nodes step by step
function updateNetwork(step) {
    if (step >= 0 && step < bfsOrder.length) {
        var nodeId = bfsOrder[step];
        var colorIndex = step % colors.length;
        nodes.update({id: nodeId, color: {background: colors[colorIndex]}});
        document.getElementById('status').innerHTML = 'Status: Step ' + (step + 1) + ' of ' + maxSteps;
    }
    if (step === bfsOrder.length -1) {
        document.getElementById('status').innerHTML = 'Status: Search Complete in ' + maxSteps + ' steps.';
    }
}

// Button Event Listeners
document.getElementById('nextButton').onclick = function() {
    if (currentStep < maxSteps - 1) {
        currentStep++;
        updateNetwork(currentStep);
    }
};

document.getElementById('previousButton').onclick = function() {
    if (currentStep >= 0) {
        var nodeId = bfsOrder[currentStep];
        nodes.update({id: nodeId, color: {background: 'white'}});
        currentStep--;
        document.getElementById('status').innerHTML = 'Status: Step ' + (currentStep + 1) + ' of ' + maxSteps;
    }
};

document.getElementById('solveButton').onclick = function() {
    for (var i = currentStep + 1; i < maxSteps; i++) {
        updateNetwork(i);
    }
    currentStep = maxSteps - 1;
};

document.getElementById('resetButton').onclick = function() {
    initNetwork();
    bfs(1); // Restart BFS from node 1
};

// Initialize network on page load
initNetwork();
bfs(1); // Start BFS from node 1