# Model Viewer

How would you create a JavaScript application that views a graph
LPG data model using a specific library such as the sigma.js
library?  This is a complex task that goes beyond the 
capabilities of today's large-language models.

Here is a sample prompt that decomposes the problem into sections:

## Prompt

```linenums="0"
I would like to create a read-only graph network viewer using the sigma.js library.
The viewer must be able to do the following:

1. Given a JSON file of vertices and edges,
display a network graph using a force-directed layout.
2. The viewer must display the names of the vertices
and edges.
3. When the user clicks on a vertex or edge, the properties
of that vertex or edge must be displayed in an inspector window.

How would you go about structuring this project?  Break it down
into JavaScript functions.  Show your reasoning step-by-step.
```

## Summary of Response

1. Setup the HTML (load libraries and display regions)
    1. Make the application 800 wide and 600 high
    1. Draw the graph network in the left 400
    1. Draw the inspector in the right 400
2. Load and Parson JSON data
3. Initialize the Graph
4. Apply the Force-directed graph algorithm
5. Display Names and Labels
6. Handle Interactivity

## Full Response

Creating a read-only graph network viewer with the sigma.js library involves several steps, from parsing the JSON data to visualizing the graph and handling user interactions. Here's a structured approach to developing this project, broken down into JavaScript functions and components:

### Step 1: Setting Up the Project Environment

First, ensure you have a basic HTML and JavaScript project setup, including sigma.js. You can include sigma.js via a CDN or install it via npm/yarn if you're using a build system like webpack or Parcel.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Graph Network Viewer</title>
</head>
<body>
    <div id="graph-container" style="width: 800px; height: 600px;"></div>
    <div id="inspector" style="width: 400px; height: 600px; overflow: auto;"></div>

    <!-- Include sigma.js -->
    <script src="path_to_sigma/sigma.min.js"></script>
    <!-- Your script -->
    <script src="your_script.js"></script>
</body>
</html>
```

### Step 2: Loading and Parsing JSON Data

Create a function to load and parse the JSON file. This file should contain your vertices (nodes) and edges with their properties, including names.

```javascript
function loadGraphData(filePath) {
    return fetch(filePath)
        .then(response => response.json())
        .then(data => {
            return data; // Assuming data is in the format { nodes: [...], edges: [...] }
        });
}
```

### Step 3: Initializing the Graph

Using sigma.js, initialize the graph. You'll need a function that takes the parsed JSON data and adds the nodes and edges to the sigma instance.

```javascript
function initializeGraph(graphData) {
    const container = document.getElementById('graph-container');
    const sigmaInstance = new sigma({
        graph: graphData,
        container: container,
        settings: {
            defaultNodeLabelColor: '#fff',
            edgeLabelSize: 'proportional',
            // Add more settings to customize the appearance
        }
    });

    sigmaInstance.refresh();
    return sigmaInstance;
}
```

### 4\. Applying Force-Directed Layout

Sigma.js supports various layouts, including force-directed ones. Depending on the version or plugins you're using, the way to apply a layout might differ. Here, let's assume you have a force-directed layout plugin or functionality available.

```javascript
function applyForceDirectedLayout(sigmaInstance) {
    // This is highly dependent on the specific sigma.js version or plugins used.
    // Check the documentation for applying a force-directed layout.
    // Example (pseudocode):
    // const forceLayout = new sigma.layouts.forceAtlas2.configure(sigmaInstance, options);
    // sigma.layouts.startForceAtlas2();
}
```

### 5\. Displaying Names

To display the names of vertices and edges, ensure your JSON data includes these as properties, and configure sigma.js to display them. This might involve setting the right `settings` on sigma instance initialization or using a custom rendering function.

### 6\. Handling Clicks and Displaying Properties

Add event listeners to sigma instances for clicks on nodes and edges. Then, display the properties in the inspector window.

```
javascriptCopy code
`function setupInteractivity(sigmaInstance) {
    sigmaInstance.bind('clickNode', function(e) {
        const node = e.data.node;
        displayPropertiesInInspector(node);
    });

    sigmaInstance.bind('clickEdge', function(e) {
        const edge = e.data.edge;
        displayPropertiesInInspector(edge);
    });
}

function displayPropertiesInInspector(element) {
    const inspector = document.getElementById('inspector');
    inspector.innerHTML = ''; // Clear previous content
    Object.keys(element).forEach(key => {
        const value = element[key];
        const div = document.createElement('div');
        div.textContent = `${key}: ${value}`;
        inspector.appendChild(div);
    });
}
`

```

### 7\. Bringing It All Together

Finally, use these functions to load the graph data, initialize the graph with sigma.js, apply the layout, and set up interactivity.

```
javascriptCopy code
`loadGraphData('path_to_your_json_file.json').then(graphData => {
    const sigmaInstance = initializeGraph(graphData);
    applyForceDirectedLayout(sigmaInstance); // If applicable
    setupInteractivity(sigmaInstance);
});
`

```

### Conclusion

This structured approach covers loading and parsing JSON data, initializing the graph with sigma.js, applying a force-directed layout, and handling user interactions. It's important to adapt the pseudocode to your specific version of sigma.js and its available features or plugins. Always refer to the latest sigma.js documentation for detailed guidance on its API and best practices.