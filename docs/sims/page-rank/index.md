---
title: PageRank
description: Interactive visualization of Google's PageRank algorithm showing iterative calculation of node importance in directed graphs
image: /sims/page-rank/page-rank.png
og:image: /sims/page-rank/page-rank.png
quality_score: 80
---

# PageRank

<iframe src="page-rank.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/page-rank/page-rank.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run PageRank MicroSim in Fullscreen](page-rank.html){ .md-button .md-button--primary }
[Edit in p5.js Editor](https://editor.p5js.org/dmccreary/sketches/YAwpC4f9I){ .md-button }

## Description

This MicroSim demonstrates Google's PageRank algorithm, which calculates the relative importance of nodes in a directed graph. Node sizes are proportional to their PageRank values, visually showing which nodes are most "important" based on their incoming links.

Key features:

- Interactive "Update PageRank" button for iterative calculation
- Node diameter proportional to PageRank value
- Directed edges showing link structure
- Convergence visualization as values stabilize

### How to Use

1. Click "Update PageRank" to run one iteration of the algorithm
2. Watch node sizes change as PageRank values update
3. Continue clicking to see values converge to stable state
4. Observe which nodes become largest (most important)

## How PageRank Works

### Initial Distribution

Initially, every node is assigned the same PageRank value (typically 1.0), representing equal "importance" among all nodes.

### PageRank Calculation

On each update, the PageRank for each node is recalculated:

- New PageRank = sum of (PageRank of incoming nodes / their outgoing links)
- Modified by damping factor (typically 0.85)

### Damping Factor

The damping factor (0.85) models the probability of randomly jumping to another node. The formula:

```
PR(node) = (1-d)/N + d * Σ(PR(neighbor)/outlinks(neighbor))
```

Where `d` is the damping factor and `N` is total nodes.

### Convergence

After sufficient iterations, PageRank values converge to a stable state where further iterations don't significantly change values. This stable state reflects the relative "importance" of each node.

## Directed Edges

In this visualization:

- Each node has `outgoing` and `incoming` arrays for directed edges
- The `addLink` method creates directed edges between nodes
- Arrows indicate link direction (like hyperlinks between web pages)
- PageRank flows along these directed edges

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain how PageRank measures node importance
- Describe the role of the damping factor
- Understand iterative convergence in algorithms
- Apply PageRank concepts to web search ranking

### Target Audience

- High school and college computer science students
- Prerequisites: Understanding of directed graphs

### Activities

1. **Exploration Activity**: Run the algorithm until convergence and identify the highest-ranked node
2. **Guided Investigation**: Predict which node will have the highest PageRank before running
3. **Extension Activity**: Discuss how this algorithm revolutionized web search

### Assessment

- Why do nodes with many incoming links tend to have higher PageRank?
- What is the purpose of the damping factor?
- How many iterations does it typically take for PageRank to converge?

## References

- [PageRank - Wikipedia](https://en.wikipedia.org/wiki/PageRank) - Comprehensive algorithm description
- [The Anatomy of a Search Engine](http://infolab.stanford.edu/~backrub/google.html) - Original Google paper by Brin and Page
- [p5.js Reference](https://p5js.org/reference/) - Documentation for the visualization library used
