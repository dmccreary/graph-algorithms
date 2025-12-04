---
title: Breadth First Search
description: Interactive visualization of the Breadth-First Search (BFS) graph traversal algorithm using p5.js
image: /sims/bfs/bfs.png
og:image: /sims/bfs/bfs.png
quality_score: 72
---

# Breadth First Search

<iframe src="bfs.html" width="100%" height="450px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/bfs/bfs.html" width="100%" height="450px" scrolling="no"></iframe>
```

[Run Breadth First Search MicroSim in Fullscreen](bfs.html){ .md-button .md-button--primary }

Note: You must click on the Next Button twice to get to level 1 search.

## Description

This MicroSim demonstrates the Breadth-First Search (BFS) algorithm for graph traversal. BFS explores a graph level by level, visiting all neighbors of a node before moving to the next level.

Key features:

- Green vertex at the center serves as the starting point
- 20 vertices connected by edges to their 2-3 closest neighbors
- Step-by-step visualization showing nodes turning red as they are visited
- Interactive Next button to advance through the algorithm

### How to Use

1. Click the "Next" button to advance the BFS algorithm one step
2. Observe how the algorithm visits all nodes at the current level before proceeding deeper
3. Watch as unvisited nodes (blue) turn red when visited
4. Continue until all vertices have been visited

## Sample Prompt

```linenums="0"
Generate a simulation of breadth-first-search on a graph.
Place a green vertex at the center of a network of 20
vertices that are placed on the canvas.
Connect each vertex to the 2 or 3 closest vertices
using edges. For each step in the search,
color the next vertex red.
Repeat until all vertices have been visited.
```

[Link to ChatGPT Transcript](https://chat.openai.com/share/1b72c39f-32d6-478d-98a6-d9292374c844)

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain how breadth-first search traverses a graph level by level
- Identify the order in which nodes are visited during BFS
- Compare BFS traversal patterns with depth-first search

### Target Audience

- High school and introductory college computer science students
- Prerequisites: Basic understanding of graphs (nodes and edges)

### Activities

1. **Exploration Activity**: Run the simulation and predict which node will be visited next
2. **Guided Investigation**: Count the number of steps to visit all nodes and identify the "levels" of the graph
3. **Extension Activity**: Compare with the DFS simulation to understand the difference in traversal order

### Assessment

- What data structure does BFS use to track nodes to visit? (Queue)
- Why does BFS visit nodes level by level?
- In what scenarios would BFS be preferred over DFS?

## References

- [Breadth-First Search - Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search) - Comprehensive explanation of BFS algorithm
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
- [Graph Traversal Algorithms](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/) - Tutorial on BFS implementation
