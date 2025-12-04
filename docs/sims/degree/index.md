---
title: Graph Degree
description: Interactive visualization showing incoming, outgoing, and total degree of nodes in a directed graph using p5.js
image: /sims/degree/degree.png
og:image: /sims/degree/degree.png
quality_score: 75
---

# Graph Degree

<iframe src="degree.html" width="100%" height="450px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/degree/degree.html" width="100%" height="450px" scrolling="no"></iframe>
```

[Run Degree MicroSim in Fullscreen](degree.html){ .md-button .md-button--primary }
[Edit in p5.js Editor](https://editor.p5js.org/dmccreary/sketches/ZBjxPNa6f){ .md-button }

## Description

This MicroSim demonstrates the concept of node degree in directed graphs. Next to each vertex, three numbers are displayed showing the degree metrics:

1. **Incoming** - The number of directed edges entering the node
2. **Outgoing** - The number of directed edges leaving the node
3. **Total** - The sum of incoming and outgoing edges

Key features:

- Visual representation of a directed graph
- Display of in-degree, out-degree, and total degree for each node
- Dark blue circles represent vertices with degree labels

### How to Use

1. Observe the directed edges (arrows) connecting nodes
2. Count the incoming edges to verify the in-degree value
3. Count the outgoing edges to verify the out-degree value
4. Note that total degree = in-degree + out-degree

## Graph Database Performance Considerations

Many graph databases don't perform well when a graph has nodes with very high degree. For example, if you have a node for Gender (Female, Male, Unknown), then every Person in the graph (potentially billions) would have an incoming HAS_GENDER edge. This creates a "supernode" that can slow down queries.

### Hub Nodes

In graph theory and network analysis, a vertex with a high number of incoming edges is often referred to as a **hub**. This term is especially common in scale-free networks where some nodes act as highly connected hubs.

### Sink Nodes

A **sink** is a vertex with a high number of incoming edges and few or no outgoing edges. This is particularly relevant in directed graphs.

### Celebrity Nodes in Social Networks

In Twitter and other social media contexts, a person with a large number of followers is often called an **influencer**. In network analysis terms, these individuals have "high in-degree centrality" within the network.

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Define in-degree, out-degree, and total degree for graph nodes
- Calculate the degree of nodes in a directed graph
- Explain the significance of high-degree nodes in real-world networks
- Identify potential performance issues with supernode patterns

### Target Audience

- High school and introductory college computer science students
- Prerequisites: Understanding of directed graphs

### Activities

1. **Exploration Activity**: Calculate the degree of each node manually and verify against the visualization
2. **Guided Investigation**: Identify the hub and sink nodes in the graph
3. **Extension Activity**: Discuss how social media platforms handle high-degree nodes (influencers)

### Assessment

- What is the difference between in-degree and out-degree?
- Why might high-degree nodes cause performance problems in graph databases?
- Give an example of a real-world hub node

## References

- [Degree (graph theory) - Wikipedia](https://en.wikipedia.org/wiki/Degree_(graph_theory)) - Mathematical definition of degree
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
- [Graph Database Performance](https://neo4j.com/developer/guide-performance-tuning/) - Considerations for high-degree nodes
