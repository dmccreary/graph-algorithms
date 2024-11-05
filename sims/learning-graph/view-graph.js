function drawGraph() {
    // Fetch the graph data from the JSON file
    fetch('graph-algorithms.json')
      .then(response => response.json())
      .then(data => {
        // Extract nodes from the JSON data
        const nodes = new vis.DataSet(data.nodes);
  
        // Function to fix the x positions for foundation and goal groups after JSON load
        nodes.forEach(function (node) {
            if (node.group === "found") {
                node.x = -1200;
                node.fixed = { x: true, y: false }; // Fix x, but let y be adjusted by physics
                node.shape = "box";
                node.color = "red";
                node.font = {"color": "white"};
            } else if (node.group === 11) {
                node.x = 1200;
                node.fixed = { x: true, y: false }; // Fix x, but let y be adjusted by physics
                node.shape = "star";
                node.color = "gold";
            }
          });
  
        const edges = new vis.DataSet(data.edges);
  
        // Create a network
        const container = document.getElementById('mynetwork');
        const graphData = {
              nodes: nodes,
              edges: edges
        };
  
      // Network options
      // Configuration options
      var options = {
         physics: {
         enabled: true,
         solver: 'forceAtlas2Based',
         stabilization: {
           iterations: 1000,
           updateInterval: 25
        },
      },
      layout: {
        improvedLayout: false, // must use false if any pinned nodes
      },
      edges: {
          arrows: {
            to: {
              enabled: true, // all edges have an arrow on the "to"" side
              type: 'arrow' // Options: 'arrow', 'bar', 'circle', 'triangle'
            }
          },
          smooth: {
            type: 'continuous' // Smooth edges
          }
        },
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 14,
          color: 'black'
        },
        borderWidth: 2,
        borderWidthSelected: 4
      }
  };
  
    // Initialize the network
      const network = new vis.Network(container, graphData, options);
    })
    .catch(error => {
            console.error("Error loading or parsing graph-data.json:", error);
    });
  }

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main");
    const toggleButton = document.getElementById("toggle-button");

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        // toggleButton.textContent = "☰"; // Open icon
        toggleButton.innerHTML = "&#9776;"; // Hamburger menu icon (open state)

        mainContent.style.marginLeft = "auto"; // Restore margin
    } else {
        sidebar.style.display = "none";
        // toggleButton.textContent = "→"; // Collapse icon
        toggleButton.innerHTML = "&#8594;"; // Right arrow (collapsed state)
        mainContent.style.marginLeft = "0"; // Remove margin for full width
    }
}