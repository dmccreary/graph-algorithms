---
title: Spanning Trees
description: Interactive visualization of minimum spanning tree algorithms for connecting vertices with minimum total edge weight
quality_score: 55
---

# Spanning Trees

<iframe src="spanning-tree.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/spanning-tree/spanning-tree.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Spanning Tree MicroSim in Fullscreen](spanning-tree.html){ .md-button .md-button--primary }

## Description

Given a list of vertices with distances between them, what is the shortest path that connects them all together? This is the minimum spanning tree problem.

This is an important algorithm for network design, power distribution, and many other areas. For example, in connecting houses to the power grid, how can you use the least amount of wire?

### How to Use

1. Observe the vertices and their connections
2. Watch the algorithm build the minimum spanning tree
3. Note which edges are selected to minimize total distance

## What is a Spanning Tree?

A spanning tree of a graph is a subgraph that:

- Includes all vertices of the original graph
- Is a tree (connected and has no cycles)
- Has exactly n-1 edges for n vertices

A **minimum spanning tree (MST)** is a spanning tree with the smallest possible sum of edge weights.

## Common Algorithms

### Prim's Algorithm

Starts from one vertex and grows the tree by adding the cheapest edge that connects a tree vertex to a non-tree vertex.

### Kruskal's Algorithm

Sorts all edges by weight and adds them one by one, skipping edges that would create a cycle.

## Real-World Applications

1. **Network Design**: Laying cable or fiber optic networks
2. **Power Distribution**: Connecting houses with minimum wire
3. **Transportation**: Designing efficient road networks
4. **Cluster Analysis**: Grouping related data points
5. **Image Segmentation**: Dividing images into regions

## External Resources

[Jazon Jiao's Prim's Algorithm Demo](https://www.jazonjiao.com/demo/prim/)

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Define what a spanning tree is
- Explain the minimum spanning tree problem
- Compare Prim's and Kruskal's algorithms
- Apply MST concepts to network design problems

### Target Audience

- High school and college computer science students
- Prerequisites: Understanding of weighted graphs and trees

### Activities

1. **Exploration Activity**: Build a spanning tree manually and calculate its total weight
2. **Guided Investigation**: Compare the result of Prim's vs Kruskal's algorithm
3. **Extension Activity**: Design a network connecting cities with minimum cable

### Assessment

- What makes a spanning tree "minimum"?
- How many edges does a spanning tree have for n vertices?
- Why is MST useful for network design?

## References

- [Minimum Spanning Tree - Wikipedia](https://en.wikipedia.org/wiki/Minimum_spanning_tree) - Comprehensive overview
- [Prim's Algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) - Detailed algorithm description
- [Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm) - Alternative MST algorithm
