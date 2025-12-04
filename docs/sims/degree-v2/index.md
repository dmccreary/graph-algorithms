---
title: Degree V2
description: Interactive p5.js visualization demonstrating how graph degree changes based on the number of connections between vertices
image: /sims/degree-v2/degree-v2.png
og:image: /sims/degree-v2/degree-v2.png
quality_score: 75
---

# Degree V2

<iframe src="degree-v2.html" width="100%" height="550px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/degree-v2/degree-v2.html" width="100%" height="550px" scrolling="no"></iframe>
```

[Run Degree V2 MicroSim in Fullscreen](degree-v2.html){ .md-button .md-button--primary }
[Edit in p5.js Editor](https://editor.p5js.org/dmccreary/sketches/yHTEP4S_c){ .md-button }

## Description

This MicroSim demonstrates how the degree of nodes in a network graph changes based on the number of connections between vertices. Nodes are arranged in a circle, and you can adjust both the number of nodes and the degree of connections.

Key features:

- Interactive sliders to control number of nodes (4-20)
- Adjustable degree slider to change connection density
- Real-time visualization of edge connections
- Circular layout for clear visualization of relationships

### How to Use

1. Use the **Nodes** slider to change the number of vertices (4-20)
2. Use the **Degree** slider to adjust how many neighbors each node connects to
3. Observe how the network becomes denser as degree increases
4. Notice the constraint: degree cannot exceed the number of nodes

## Sample Prompt

```linenums="0"
Create a p5.js sketch on a 500x600 canvas.
This sketch demonstrates how the degree of a network graph changes based on the number of connections between vertices of the graph.
The drawing region is 500x500.
The control region is the bottom 100 below the drawing region.
Add a slider called nSlider that changes the number of small circles on the edge of the large circle.
The range of nSlider is from 4 to 20 with a default value of 10.
Add a second slider called degreeSlider that changes the number of edges between each small circle and other small circles.
```

## Sample Code

```js
// Network Graph Degree Demo
let canvasWidth = 450;
let drawingHeight = 450;
let xCenter = canvasWidth / 2;
let yCenter = drawingHeight / 2;
let controlRegionHeight = 60;
let nSlider, degreeSlider;
let leftMargin = 100;

function setup() {
  createCanvas(canvasWidth, drawingHeight + controlRegionHeight);
  textSize(16);

  nSlider = createSlider(4, 20, 10, 1).position(leftMargin, canvasWidth + 10);
  degreeSlider = createSlider(1, 10, 4, 1).position(leftMargin, canvasWidth + 30);
}
```

!!! Note
    There is a bug in the code that tries to ensure the degree is always less than the number of nodes.

[Random Node Distribution Example](https://editor.p5js.org/dmccreary/sketches/LzAtUbzWf)

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain the relationship between node count and possible degree
- Observe how network density changes with degree
- Understand constraints on degree in finite graphs
- Visualize regular graphs where all nodes have the same degree

### Target Audience

- High school and introductory college computer science students
- Prerequisites: Basic understanding of graphs

### Activities

1. **Exploration Activity**: Set nodes to 10 and gradually increase degree from 1 to 9
2. **Guided Investigation**: Find the relationship between degree value and total edges in the graph
3. **Extension Activity**: Calculate the formula for total edges given n nodes and degree d

### Assessment

- What is the maximum possible degree for a node in a graph with n nodes?
- If all nodes have degree d, how many edges are in the graph?
- Why does the display show "Degree: 8" when the slider is at 4?

## References

- [Regular Graph - Wikipedia](https://en.wikipedia.org/wiki/Regular_graph) - Graphs where all nodes have the same degree
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
- [Network Density](https://en.wikipedia.org/wiki/Dense_graph) - Relationship between edges and possible edges
