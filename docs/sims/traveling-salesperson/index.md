---
title: Traveling Salesperson Problem
description: Interactive visualization of the Traveling Salesperson Problem (TSP) - finding the shortest route visiting all cities using vis-network
image: /sims/traveling-salesperson/traveling-salesperson.png
og:image: /sims/traveling-salesperson/traveling-salesperson.png
quality_score: 85
---

# Traveling Salesperson Problem

<iframe src="main.html" width="100%" height="500px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/traveling-salesperson/main.html" width="100%" height="500px" scrolling="no"></iframe>
```

[Run Traveling Salesperson MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Description

This MicroSim demonstrates the Traveling Salesperson Problem (TSP) using an interactive visualization of 10 major US cities. The simulation allows you to:

1. **Generate a random route** - Click "Visit All Cities" to watch a blue traveler visit each city in a random order
2. **View route details** - The right panel shows the complete route with distances between each city
3. **Optimize the route** - Click "Optimize Route" to apply heuristic algorithms that find a shorter path

### Features

- **10 US Cities**: Seattle, San Francisco, Los Angeles, Phoenix, Denver, Dallas, Chicago, Atlanta, New York, and Miami positioned to approximate their geographic locations
- **Animated Traversal**: Watch a blue circle visit each city in sequence
- **Distance Calculations**: Edge distances approximate real-world distances using a scale factor
- **Route Optimization**: Combines nearest neighbor heuristic with 2-opt improvement

## The Problem

The Traveling Salesperson Problem (TSP) is one of the most famous optimization problems in computer science:

- You have n cities to visit
- You must visit each city exactly once
- You must return to the starting city
- Goal: Minimize total travel distance

### Why It's Important

TSP is an NP-hard problem, meaning there's no known algorithm that can solve it efficiently for large numbers of cities. It has applications in:

- Logistics and route planning
- Manufacturing (circuit board drilling)
- DNA sequencing
- Scheduling and resource allocation

## Algorithms Implemented

### Random Route (Fisher-Yates Shuffle)

The "Visit All Cities" button generates a random permutation of cities using the Fisher-Yates shuffle algorithm. This provides a baseline tour that is typically far from optimal.

```javascript
function generateRandomRoute() {
    const route = [...Array(cities.length).keys()];
    for (let i = route.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [route[i], route[j]] = [route[j], route[i]];
    }
    return route;
}
```

### Nearest Neighbor Heuristic

Starting from a city, always move to the closest unvisited city. This greedy approach is fast (O(n²)) but doesn't guarantee the optimal solution.

### 2-opt Improvement

After generating an initial tour, the 2-opt algorithm iteratively improves it by:

1. Selecting two edges in the tour
2. Checking if reversing the path between them reduces total distance
3. Repeating until no improvements are found

The optimization tries nearest neighbor from each starting city and applies 2-opt, keeping the best result.

## How to Use

1. Click **Visit All Cities** to generate a random tour and watch the animation
2. Observe the route and total distance in the right panel
3. Click **Optimize Route** to find a shorter path using heuristics
4. Compare the improvement percentage shown
5. Click **Reset** to start over

## Lesson Plan

### Learning Objectives

After completing this lesson, students will be able to:

- Explain the Traveling Salesperson Problem and its constraints
- Understand why TSP is computationally difficult (NP-hard)
- Compare random routes with heuristic solutions
- Apply the nearest neighbor and 2-opt algorithms
- Relate TSP to real-world routing problems

### Target Audience

- High school and college computer science students
- Prerequisites: Understanding of graphs, distances, and basic algorithms

### Activities

1. **Exploration Activity**: Generate several random routes and record the distances. What's the average? What's the range?
2. **Guided Investigation**: Compare the optimized route to the random route. How much improvement does the heuristic typically achieve?
3. **Critical Thinking**: Why doesn't the optimization always find the same route? Why might it not find the absolute best route?
4. **Extension Activity**: Research the complexity of TSP - how many possible routes exist for 10 cities? (Answer: 9!/2 = 181,440 for symmetric TSP)

### Assessment

- Why is TSP considered NP-hard?
- How many possible routes exist for n cities?
- Explain how the nearest neighbor heuristic works
- What is the 2-opt improvement algorithm?
- When would you use a heuristic vs. an exact solution?

## Implementation Details

### City Positioning

Cities are positioned on a coordinate system where:
- X: negative = west, positive = east
- Y: negative = north, positive = south

The vis-network library renders these positions as a pseudo-map of the United States.

### Distance Calculation

Distances are calculated using Euclidean distance with a scale factor to approximate real-world miles:

```javascript
function getDistance(city1, city2) {
    const dx = city2.x - city1.x;
    const dy = city2.y - city1.y;
    return Math.sqrt(dx * dx + dy * dy) * DISTANCE_SCALE;
}
```

## Optimizing the Vis-Network Layout

This MicroSim uses a right-side panel for route information and controls, which creates a layout challenge: vis-network's default `fit()` function centers the graph in the entire canvas, causing eastern cities (New York, Atlanta, Miami) to appear under the panel.

### The Problem

By default, vis-network automatically fits all nodes to the viewport on initialization and resize. The `fit()` function:

1. Calculates the bounding box of all nodes
2. Centers that bounding box in the canvas
3. Scales to fit all nodes with some padding

This works well for full-canvas layouts but fails when UI elements overlay part of the canvas.

### The Solution

After the default fit, we apply two adjustments:

1. **Scale down to 75%** - Makes the map smaller to leave room for the panel
2. **Shift the viewport** - Moves the focal point right by 100 units, which shifts the displayed map left on screen

```javascript
network.once('afterDrawing', () => {
    network.fit({ animation: false });

    // Scale down and shift left to make room for right panel
    const scale = network.getScale();
    const viewPosition = network.getViewPosition();
    network.moveTo({
        position: {
            x: viewPosition.x + 100,  // Shift focal point right = map moves left
            y: viewPosition.y
        },
        scale: scale * 0.75,
        animation: false
    });
});
```

### Key Insights

- **Viewport positioning is counterintuitive**: To shift the map LEFT on screen, you move the viewport center RIGHT in network coordinates
- **Use `afterDrawing` event**: The `setTimeout` approach is unreliable; use vis-network's event system
- **Apply same logic on resize**: The window resize handler must reapply the same fit-then-adjust sequence
- **Shifting coordinates doesn't help**: Moving node coordinates left doesn't solve the problem because `fit()` will always re-center on the bounding box

### Parameters to Tune

| Parameter | Value | Effect |
|-----------|-------|--------|
| Scale multiplier | 0.75 | Smaller = more room around edges |
| X offset | 100 | Larger = map shifts more to the left |

Adjust these values based on your panel width and desired spacing.

## References

- [Traveling Salesman Problem - Wikipedia](https://en.wikipedia.org/wiki/Travelling_salesman_problem) - Comprehensive overview
- [2-opt Algorithm - Wikipedia](https://en.wikipedia.org/wiki/2-opt) - Edge swap improvement heuristic
- [Nearest Neighbour Algorithm](https://en.wikipedia.org/wiki/Nearest_neighbour_algorithm) - Greedy TSP heuristic
- [Concorde TSP Solver](http://www.math.uwaterloo.ca/tsp/concorde.html) - State-of-the-art exact TSP solver
- [vis-network Documentation](https://visjs.github.io/vis-network/docs/network/) - Visualization library used
