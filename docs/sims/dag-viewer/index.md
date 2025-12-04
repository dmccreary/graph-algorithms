---
title: DAG Viewer
description: Interactive left-to-right Directed Acyclic Graph (DAG) viewer using vis-network.js for visualizing concept dependencies
image: /sims/dag-viewer/dag-viewer.png
og:image: /sims/dag-viewer/dag-viewer.png
quality_score: 72
---

# DAG Viewer

<iframe src="dag-viewer-4.html" width="100%" height="600px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/dag-viewer/dag-viewer-4.html" width="100%" height="600px" scrolling="no"></iframe>
```

[Run DAG Viewer MicroSim in Fullscreen](dag-viewer-4.html){ .md-button .md-button--primary }

## Description

This MicroSim displays a Directed Acyclic Graph (DAG) using a left-to-right (LR) layout with the vis-network.js library. The algorithm places each node in columns based on their dependencies, with independent nodes (no prerequisites) on the right and dependent nodes on the left.

Key features:

- Left-to-right hierarchical layout showing dependency flow
- Nodes positioned based on their dependency levels
- Visualization of the graph algorithms course learning graph
- Static positioning for stable, clear visualization

### How to Use

1. Hover over nodes to see their labels
2. Drag to pan around the graph
3. Scroll to zoom in/out
4. Follow edges from left to right to see dependency relationships

The program uses the graph-algorithms learning graph CSV file:

[View the Graph Algorithms Learning Graph CSV File](./graph-algorithms.csv)

## Implementation Versions

### Version 1 - Basic Hierarchical Layout

[DAG Viewer 1](dag-viewer.html) - Initial implementation using vis.js hierarchical layout

### Version 2 - Improved Spacing

[DAG Viewer 2](dag-viewer-2.html)

### Version 3 - Refined Layout

[DAG Viewer 3](dag-viewer-3.html)

### Version 4 - Static Positioning (Recommended)

[DAG Viewer 4](dag-viewer-4.html) - Uses precise static positioning rather than physics-based layout. The key insight was that since we're dealing with a hierarchical dependency structure where nodes need to maintain their horizontal levels, physics simulation wasn't necessary.

## Sample Prompt

!!! prompt
    I have a directed acyclic graph (DAG) and I want you to create a vis.js program so that the placement of the nodes on the graph always place dependent nodes to the left of a node. Nodes with no dependencies should be on the right side of the canvas.

    Use the following vis.js library reference from unpkg.com:

    https://unpkg.com/vis-network/standalone/umd/vis-network.min.js

    Use the following parameters in the vis.js options:

    ```javascript
    const options = {
        layout: {
            hierarchical: {
                enabled: true,
                direction: 'LR',  // Left to right
                sortMethod: 'directed',
                nodeSpacing: 80,
                levelSeparation: 500
            }
        }
    }
    ```

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain what a Directed Acyclic Graph (DAG) is and its properties
- Identify dependency relationships in a DAG visualization
- Understand how hierarchical layouts organize nodes by dependency level
- Apply DAG visualization to represent learning prerequisites

### Target Audience

- Computer science students learning about graph theory
- Prerequisites: Understanding of directed graphs and dependencies

### Activities

1. **Exploration Activity**: Identify which concepts have the most dependencies (leftmost nodes)
2. **Guided Investigation**: Trace the path from a foundational concept to an advanced one
3. **Extension Activity**: Modify the CSV file to add a new concept and see how it affects the layout

### Assessment

- What makes a graph "acyclic"?
- Why are independent nodes placed on the right in this visualization?
- How would adding a cycle affect this visualization?

## References

- [Directed Acyclic Graph - Wikipedia](https://en.wikipedia.org/wiki/Directed_acyclic_graph) - Theory of DAGs
- [vis-network.js Hierarchical Layout](https://visjs.github.io/vis-network/docs/network/layout.html) - Layout options documentation
- [Topological Sorting](https://en.wikipedia.org/wiki/Topological_sorting) - Algorithm used to order DAG nodes
