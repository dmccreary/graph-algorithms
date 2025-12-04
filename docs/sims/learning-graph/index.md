---
title: Learning Graph
description: Interactive visualization of a learning graph showing concept dependencies and taxonomies using vis-network.js
image: /sims/learning-graph/learning-graph.png
og:image: /sims/learning-graph/learning-graph.png
quality_score: 70
---

# Learning Graph MicroSimulation

<iframe src="view-graph.html" width="100%" height="600px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/learning-graph/view-graph.html" width="100%" height="600px" scrolling="no"></iframe>
```

[Run Learning Graph in Fullscreen](view-graph.html){ .md-button .md-button--primary }

## Description

This MicroSim demonstrates how to build a learning graph from a course description using a multi-step prompting process with large language models. Each prompt output is used as input to the next prompt, progressively building a complete learning dependency graph.

Key features:

- Visualization of ~150 core concepts and their dependencies
- Color-coded nodes by taxonomy category
- Foundation concepts on the left, advanced topics on the right
- Interactive legend for category reference

### How to Use

1. Explore the graph by panning and zooming
2. Click on nodes to see their connections
3. Use the legend to understand category color coding
4. Follow edges to understand concept dependencies

## Building the Learning Graph

### Step 1: Course Description

We use Bloom's taxonomy to create a course description that begins with foundational concepts and progresses to hands-on activities.

[Course Description](00-course-description.md)

### Step 2: Enumerating Concepts

We use the course description to generate a flat list of around 150 core concepts used in this course.

[Enumerating Concepts](./01-enumerating-concepts.md)

### Step 3: Concept Dependencies

Once we have a list of our core concepts, we ask an LLM to help create a dependency graph.

[Concept Dependencies](02-concept-dependencies.md)

### Step 4: Concept Taxonomies

We then categorize these concepts into a taxonomy used to color the network graph learning map.

[Concept Taxonomies](03-concept-taxonomies.md)

### Step 5: View Legend

Once we have a taxonomy, we convert that list into an HTML table that can be used as a legend. This version has a way to collapse the sidebar.

[View Legend](view-legend.html)

### Step 6: View Graph

Finally, we put it all together in a graph viewer. This version reads a JSON file with group names added and attempts to position foundation elements to the left and advanced topics on the right.

[View Graph](./view-graph.html)

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain how LLMs can assist in curriculum design
- Describe the process of building a learning dependency graph
- Identify foundational vs advanced concepts in a subject area
- Understand the value of visualizing learning paths

### Target Audience

- Curriculum designers and educators
- Prerequisites: Basic understanding of course design

### Activities

1. **Exploration Activity**: Navigate the learning graph and identify prerequisite chains
2. **Guided Investigation**: Find the longest dependency path from a foundation to an advanced concept
3. **Extension Activity**: Use the prompts to create a learning graph for a different subject

### Assessment

- What is the purpose of categorizing concepts by taxonomy?
- How does visualizing dependencies help with curriculum design?
- Why are foundation concepts placed on the left of the graph?

## References

- [Bloom's Taxonomy](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy) - Framework for educational objectives
- [vis-network.js Documentation](https://visjs.github.io/vis-network/docs/network/) - Library used for graph visualization
- [Learning Graph Methodology](https://www.dmccreary.com/learning-graphs/) - Background on learning graphs
