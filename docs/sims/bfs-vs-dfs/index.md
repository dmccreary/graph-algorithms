---
title: BFS vs DFS Comparison
description: Interactive side-by-side comparison of Breadth-First Search and Depth-First Search graph traversal algorithms using vis-network.js
quality_score: 70
---

# BFS vs DFS Comparison

<iframe src="main.html" width="100%" height="600px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/bfs-vs-dfs/main.html" width="100%" height="600px" scrolling="no"></iframe>
```

[Run BFS vs DFS MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Description

This MicroSim provides an interactive comparison of two fundamental graph traversal algorithms: Breadth-First Search (BFS) and Depth-First Search (DFS). Using the vis-network.js framework, it visualizes how each algorithm explores a graph differently.

Key features:

- Green starting point node in the center
- Light blue unvisited nodes arranged in concentric circles (3 rings)
- Yellow nodes with step numbers show the traversal order
- Radio buttons to switch between DFS and BFS algorithms
- Step-by-step controls to observe the algorithm in action

### How to Use

1. Select either "Depth-First Search" or "Breadth-First Search" using the radio buttons
2. Click "Next Step" to advance the traversal one node at a time
3. Observe the step numbers appearing on visited nodes (yellow)
4. Click "Reset" to start over or switch algorithms
5. Compare how DFS goes "deep" while BFS spreads "wide"

### Visual Feedback

- **Green nodes**: Starting point
- **Light blue nodes**: Unvisited
- **Yellow nodes**: Visited (with step numbers displayed)

## How It Works

**Depth-First Search (DFS):**

- Uses a stack data structure
- Explores as far as possible along each branch before backtracking
- Shows the characteristic "deep dive" pattern

**Breadth-First Search (BFS):**

- Uses a queue data structure
- Explores all neighbors at the current depth before moving to the next level
- Shows the characteristic "level-by-level" expansion pattern

## Sample Prompt

!!! prompt
    Our goal is to create a visualization of two different graph traversal algorithms (DFS and BFS).
    The canvas is drawn with the vis-network.js framework.

    Please generate a web application that shows two different types of graph traversal.
    There are control buttons on the bottom for "Next Step" and "Reset".
    The web page has a radio selection for "Depth First Search" and "Breadth First Search".

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Compare and contrast BFS and DFS traversal patterns
- Explain why BFS uses a queue while DFS uses a stack
- Predict which algorithm will visit a specific node first given a graph structure
- Identify real-world applications for each algorithm

### Target Audience

- High school and introductory college computer science students
- Prerequisites: Basic understanding of graphs, stacks, and queues

### Activities

1. **Exploration Activity**: Run both algorithms on the same graph and record the traversal order
2. **Guided Investigation**: Predict which nodes will be visited in what order before running each algorithm
3. **Extension Activity**: Discuss scenarios where BFS is preferred (shortest path) vs DFS (maze solving)

### Assessment

- What data structure does each algorithm use?
- Why does BFS find the shortest path in unweighted graphs?
- Draw a graph where BFS and DFS would visit nodes in the same order

## References

- [BFS vs DFS - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/) - Comparison of both algorithms
- [vis-network.js Documentation](https://visjs.github.io/vis-network/docs/network/) - Library used for graph visualization
- [Graph Traversal - Wikipedia](https://en.wikipedia.org/wiki/Graph_traversal) - Overview of graph traversal algorithms
