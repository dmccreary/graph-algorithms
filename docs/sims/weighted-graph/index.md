---
title: Weighted Graph
description: Interactive visualization of weighted graphs showing edge distances between US metropolitan cities using p5.js
image: /sims/weighted-graph/weighted-graph.png
og:image: /sims/weighted-graph/weighted-graph.png
quality_score: 72
---

# Weighted Graph

<iframe src="weighted-graph.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/weighted-graph/weighted-graph.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Weighted Graph MicroSim in Fullscreen](weighted-graph.html){ .md-button .md-button--primary }
[Edit in p5.js Editor](https://editor.p5js.org/dmccreary/sketches/ssrtXzl5_){ .md-button }

## Description

This MicroSim demonstrates weighted graphs using a visualization of major US metropolitan cities. Each city is connected to its three nearest neighbors, with edge weights representing distances between cities.

Key features:

- 10 major US cities positioned on a canvas
- Each city connected to its 3 nearest neighbors
- Edge weights displayed at the midpoint of each edge
- Blue circles represent city nodes

### How to Use

1. Observe the city positions on the canvas
2. Note the edges connecting each city to its nearest neighbors
3. Read the distance values on each edge
4. Consider how this represents a weighted graph

## Sample Prompt

```linenums="0"
Create a list of the 10 large major metropolitan cities
in the US and place them on a 400x400 canvas.
Round each point to the nearest integer.
Then create a p5.js sketch that will connect each
city to the nearest three cities.
Draw a graph that places the distance between
the nodes at the halfway point between the nodes.
```

## Implementation Highlights

### City Data Structure

```javascript
let cities = {
  "New York":      {x: 520, y: 40},
  "Los Angeles":   {x: 50,  y:180},
  "Chicago":       {x: 290, y:120},
  "Phoenix":       {x: 150, y:310},
  "Miami":         {x: 510, y:340},
  // ...
};
```

### Neighbor Calculation

The algorithm calculates distances between all city pairs and selects the 3 nearest neighbors for each city.

### Edge Weight Display

Distances are displayed at the midpoint of each edge with a white background for readability.

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Define a weighted graph and explain edge weights
- Calculate distances between nodes using Euclidean distance
- Implement a k-nearest-neighbors graph
- Apply weighted graphs to geographic problems

### Target Audience

- High school and college students
- Prerequisites: Basic understanding of graphs and coordinate geometry

### Activities

1. **Exploration Activity**: Calculate the distance between two cities manually and verify against the visualization
2. **Guided Investigation**: Identify which cities have the most connections
3. **Extension Activity**: Add a new city and predict which neighbors it would connect to

### Assessment

- What does an edge weight represent in this visualization?
- How is the nearest neighbor algorithm used to build this graph?
- Why might some cities have more than 3 edges connecting to them?

## References

- [Weighted Graph - Wikipedia](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Weighted_graph) - Definition and properties
- [K-Nearest Neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) - Algorithm for finding nearest points
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
