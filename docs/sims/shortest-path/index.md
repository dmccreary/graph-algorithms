---
title: Shortest Path
description: Interactive visualization of Dijkstra's shortest path algorithm for finding optimal routes in weighted graphs
quality_score: 70
---

# Shortest Path

<iframe src="vis-js.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/shortest-path/vis-js.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Shortest Path MicroSim in Fullscreen](vis-js.html){ .md-button .md-button--primary }

## Description

Given a graph, how do we find the shortest path between two points? The classic solution is Dijkstra's shortest path algorithm, one of the most famous algorithms in computer science.

This MicroSim demonstrates Dijkstra's algorithm for finding the shortest paths between nodes in a weighted graph.

### How to Use

1. Observe the graph with weighted edges
2. Select source and destination nodes
3. Watch the algorithm find the optimal path
4. Note the total distance of the shortest path

## Background

Dijkstra's shortest path algorithm was conceived by computer scientist Edsger W. Dijkstra in 1956. It's used for finding the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights.

## How Dijkstra's Algorithm Works

1. **Initialization**: Start with a source node. Set distance to source as 0, all others as infinity.

2. **Exploration of Neighbors**: Repeatedly select the unprocessed node with smallest known distance.

3. **Distance Update**: For the selected node, check all neighbors. If current distance + edge weight < known distance, update.

4. **Mark as Processed**: Node won't be checked again.

5. **Repeat**: Until all nodes processed or all reachable nodes found.

## Algorithm Characteristics

- **Greedy Algorithm**: Makes optimal choice at each step
- **Single-Source Shortest Paths**: Finds paths from one source to all other nodes
- **Non-Negative Weights**: Only works correctly when all edge weights are non-negative

## Real-World Applications

1. **GPS and Routing Systems**: Finding shortest path between locations on a map
2. **Network Routing Protocols**: OSPF uses Dijkstra's algorithm for data packet routing
3. **Social Networking**: Degrees of separation between people
4. **Urban Planning**: Analyzing traffic patterns and road networks
5. **Telecommunications**: Routing calls efficiently through networks
6. **Biological Networks**: Analyzing pathways in bioinformatics
7. **Robotics and AI**: Pathfinding in navigation systems

[ChatGPT Dialog](https://chat.openai.com/c/5749b49c-71d3-43d1-aa8b-a7ed6528d7b8)

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain how Dijkstra's algorithm finds shortest paths
- Trace through the algorithm step by step
- Identify when Dijkstra's algorithm is applicable (non-negative weights)
- Apply shortest path concepts to real-world routing problems

### Target Audience

- High school and college computer science students
- Prerequisites: Understanding of weighted graphs

### Activities

1. **Exploration Activity**: Run the algorithm and trace the path it finds
2. **Guided Investigation**: Manually calculate the shortest path and verify against the algorithm
3. **Extension Activity**: Discuss scenarios where Dijkstra's algorithm wouldn't work (negative weights)

### Assessment

- What data structure does Dijkstra's algorithm use to track visited nodes?
- Why doesn't Dijkstra's algorithm work with negative edge weights?
- Give a real-world example where finding shortest paths is important

## References

- [Dijkstra's Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) - Comprehensive algorithm description
- [vis-network.js Documentation](https://visjs.github.io/vis-network/docs/network/) - Library used for visualization
- [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) - Biography of the algorithm's inventor
