---
title: Graph Matching
description: Interactive demonstrations of graph matching problems including schema matching, resource matching, and entity resolution
image: /sims/matching/student-mentor-match.png
og:image: /sims/matching/student-mentor-match.png
quality_score: 65
---

# Graph Matching

<iframe src="custom-curve-percent.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/matching/custom-curve-percent.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Matching Demo in Fullscreen](custom-curve-percent.html){ .md-button .md-button--primary }

## Description

Many people don't list matching problems as simply graph problems. Perhaps this is because people try to use spreadsheets to attack matching problems. However, as we will see, graphs are ideal at helping people optimize matching problems.

### Types of Matching Problems

1. **Schema Matching** - Occurs when importing new data into a database and mapping new data elements to existing elements. The [schema matching](https://en.wikipedia.org/wiki/Schema_matching) problem is a key cost factor when building data warehouse systems.

2. **Resource Matching** - Matching things like people to positions, students to mentors, or people to projects within constraints. For example, matching students with five preferences to 20 potential projects.

3. **Entity Resolution** - Adding new records to an existing database where they must be linked to the correct record. Also known as [Record Linkage](https://en.wikipedia.org/wiki/Record_linkage) or data matching.

### How to Use

1. Observe how curved lines connect matched elements
2. Notice how the visualization shows relationships between source and target items
3. Consider how this approach could visualize different matching scenarios

## Sample p5.js Matching Examples

- [Curved Line Matching](https://editor.p5js.org/dmccreary/sketches/yAEIj4Ulq)
- [Data Element Matching](https://editor.p5js.org/dmccreary/sketches/YzOOxxDgR)
- [Custom Curve With Percent](https://editor.p5js.org/dmccreary/sketches/T0tSaTPCr) - Custom curve() function with percentage parameter for partial line drawing
- [curveVertex Demo](https://editor.p5js.org/dmccreary/sketches/ooIy00BxV)

## Vis.js Matching Examples

- [Vis.js Arrow Alignment](https://visjs.github.io/vis-network/examples/network/edgeStyles/arrowAlignment.html) - Great demo of arrow alignment using curves

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Identify different types of matching problems (schema, resource, entity)
- Explain how graphs can represent matching relationships
- Understand the role of constraints in matching optimization
- Visualize bipartite matching problems

### Target Audience

- Data engineers and software developers
- Prerequisites: Basic understanding of graphs and data integration

### Activities

1. **Exploration Activity**: Identify which type of matching problem applies to a given scenario
2. **Guided Investigation**: Compare spreadsheet-based matching to graph-based approaches
3. **Extension Activity**: Design a matching visualization for student-project assignment

### Assessment

- What makes schema matching different from entity resolution?
- Why are graphs well-suited for matching problems?
- What constraints might exist in a student-mentor matching problem?

## References

- [Schema Matching - Wikipedia](https://en.wikipedia.org/wiki/Schema_matching) - Overview of schema matching
- [Entity Resolution - Wikipedia](https://en.wikipedia.org/wiki/Record_linkage) - Record linkage problem
- [Entity Resolution Guide - Quantexa](https://www.quantexa.com/resources/entity-resolution-guide/) - Practical guide to entity resolution
- [Python Matching Library](https://pypi.org/project/matching/) - Library for matching algorithms
