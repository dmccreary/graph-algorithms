document.addEventListener('DOMContentLoaded', function() {
    let cy = cytoscape({
        container: document.getElementById('cy'),
        elements: generateGraphElements(20),
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'label': 'data(id)', // This line configures the label to be the node id
                    'text-valign': 'center', // Vertically center the text inside the node
                    'text-halign': 'center', // Horizontally center the text inside the node
                    'color': '#fff', // Set the text color to white for better visibility
                    'font-size': '10px' // Adjust the font size as needed
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'curve-style': 'bezier'
                }
            }
        ],
        layout: {
            name: 'cose',
            idealEdgeLength: 100,
            nodeOverlap: 20,
            refresh: 20,
            fit: true,
            padding: 30,
            randomize: false,
            componentSpacing: 100,
            nodeRepulsion: 400000,
            edgeElasticity: 100,
            nestingFactor: 5,
            gravity: 80,
            numIter: 1000,
            initialTemp: 200,
            coolingFactor: 0.95,
            minTemp: 1.0
        }
    });
});

function generateGraphElements(vertexCount) {
    let elements = [];
    for (let i = 0; i < vertexCount; i++) {
        elements.push({ data: { id: 'n' + i } });
    }

    for (let i = 0; i < vertexCount; i++) {
        let edgeCount = Math.random() > 0.5 ? 2 : 3; // Randomly 2 or 3 edges
        let connected = new Set();
        while(connected.size < edgeCount) {
            let targetIndex = Math.floor(Math.random() * vertexCount);
            if(targetIndex !== i && !connected.has(targetIndex)) {
                elements.push({ data: { source: 'n' + i, target: 'n' + targetIndex } });
                connected.add(targetIndex);
            }
        }
    }

    return elements;
}
