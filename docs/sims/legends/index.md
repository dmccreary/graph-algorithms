---
title: Graph Legends
description: Tutorial on creating fixed-position node legends for vis-network.js graph visualizations
quality_score: 60
---

# Graph Legends

<iframe src="legend-1.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/legends/legend-1.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Legend Demo in Fullscreen](legend-1.html){ .md-button .md-button--primary }

## Description

This tutorial demonstrates how to create fixed-position legends for vis-network.js graph visualizations. Legends help users understand what different node shapes and colors represent in a network diagram.

### Legend Versions

- [Legend Version 1](./legend-1.html)
- [Legend Version 2](./legend-2.html)
- [vis.js Official Example](https://visjs.github.io/vis-network/examples/network/exampleApplications/nodeLegend.html)

### How to Use

1. Observe the legend in the top-left corner of the visualization
2. Note how each node type (Internet, Switch, Server, Computer, Smartphone) has a distinct shape and color
3. The legend nodes are fixed in position and don't respond to physics simulation

## Implementation Process

### Step 1: Define Legend Position

```js
var mynetwork = document.getElementById("mynetwork");
var x = -mynetwork.clientWidth / 2 + 50;
var y = -mynetwork.clientHeight / 2 + 50;
var step = 70;
```

### Step 2: Create Fixed Legend Nodes

Each legend node must have these attributes:

- `id` (integer) - Unique identifier
- `label` (string) - Display text
- `group` (string) - Category for styling
- `value` (integer) - Size value
- `fixed: true` - Prevents movement
- `physics: false` - Ignores physics simulation

```js
nodes.push({
  id: 1000,
  x: x,
  y: y,
  label: "Internet",
  group: "internet",
  value: 1,
  fixed: true,
  physics: false,
});
```

### Step 3: Define Groups

```js
groups: {
  switch: { shape: "triangle", color: "#FF9900" },
  desktop: { shape: "dot", color: "#2B7CE9" },
  mobile: { shape: "dot", color: "#5A1E5C" },
  server: { shape: "square", color: "#C5000B" },
  internet: { shape: "square", color: "#109618" },
}
```

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Create fixed-position legend nodes in vis-network.js
- Configure node groups with distinct shapes and colors
- Position legends relative to the canvas boundaries
- Understand the difference between fixed and physics-enabled nodes

### Target Audience

- Web developers learning data visualization
- Prerequisites: JavaScript, HTML, basic vis-network.js knowledge

### Activities

1. **Exploration Activity**: Modify the legend to add a new node type
2. **Guided Investigation**: Change the legend position to a different corner
3. **Extension Activity**: Create a collapsible legend panel

### Assessment

- What properties make a legend node stay fixed?
- Why set `physics: false` on legend nodes?
- How do you position a legend relative to canvas edges?

## References

- [vis-network.js Groups](https://visjs.github.io/vis-network/docs/network/groups.html) - Official groups documentation
- [vis-network.js Node Options](https://visjs.github.io/vis-network/docs/network/nodes.html) - Node configuration options
- [Fixed Nodes Example](https://visjs.github.io/vis-network/examples/network/exampleApplications/nodeLegend.html) - Official legend example
