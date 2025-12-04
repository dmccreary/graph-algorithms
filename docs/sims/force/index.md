---
title: Force Directed Graph Layout
description: Interactive simulation of force-directed graph placement algorithm using p5.js with step-by-step controls
image: /sims/force/force.png
og:image: /sims/force/force.png
quality_score: 68
---

# Force Directed Graph Layout

<iframe src="force.html" width="100%" height="450px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/force/force.html" width="100%" height="450px" scrolling="no"></iframe>
```

[Run Force Directed Graph in Fullscreen](force.html){ .md-button .md-button--primary }

## Description

This MicroSim demonstrates a force-directed graph placement algorithm. Force-directed algorithms position graph vertices by simulating physical forces: connected nodes attract each other while all nodes repel each other. Over time, the layout converges to a visually pleasing arrangement.

Key features:

- 20 vertices placed at random initial locations
- Each vertex connected to 3 other vertices
- Step controls: 1, 10, 100, and 1,000 steps
- Display of step count and total vertex movement

### How to Use

1. Click **Step** to advance the algorithm one iteration
2. Click **10 Steps**, **100 Steps**, or **1000 Steps** for faster convergence
3. Observe how the total movement decreases as the layout stabilizes
4. Watch connected nodes pull together while unconnected nodes spread apart

[Force Directed Graph on the MicroSims Site](https://dmccreary.github.io/microsims/sims/force-directed-graph/)

## Sample Prompt

```linenums="0"
Create a simulation of a force-directed graph placement algorithm.
Generate a single file p5.js sketch on a 500x400 canvas.
Set global variables for the width and height of the canvas.
The algorithm will move the position of vertices of a connected
   graph based on a force-directed graph placement model.
For the initial state, place 20 vertices on random locations on a 500x400 canvas.
Make the vertices be rendered by a circle with a radius of 10.
Connect each vertex to 3 other vertices using bidirectional links.
Add controls to incrementally step through the algorithm.
Add buttons for a single Step, 10 Steps, 100 Steps and 1,000 Steps at the bottom of canvas.
Display the number of steps, and the total movement of the vertices in each step.
```

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain how force-directed algorithms use physical simulation for layout
- Describe the balance between attractive and repulsive forces
- Observe convergence behavior in iterative algorithms
- Understand applications of force-directed layouts in network visualization

### Target Audience

- High school and introductory college computer science students
- Prerequisites: Basic understanding of graphs and physics concepts

### Activities

1. **Exploration Activity**: Run the algorithm and observe how movement decreases over iterations
2. **Guided Investigation**: Compare layouts after 100 vs 1000 steps
3. **Extension Activity**: Discuss why connected nodes cluster together

### Assessment

- What two types of forces are at work in this algorithm?
- Why does the total movement decrease over time?
- In what real-world applications would force-directed layouts be useful?

## References

- [Force-directed Graph Drawing - Wikipedia](https://en.wikipedia.org/wiki/Force-directed_graph_drawing) - Overview of the algorithm
- [Karsten Schmidt's Force Directed Graph](http://haptic-data.com/toxiclibsjs/examples/force-directed-graph-p5) - Related implementation
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
