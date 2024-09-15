# Shortest Path

Given a graph, how do we find the shortest path between two points on the graph?

The classic way to do this is to use Dijkstra's shortest path algorithm.

In this lesson, we describe what Dijkstra's shortest path algorithm is and how it is used to solve real-world practical graph analytics problems.

## Background

Dijkstra's shortest path algorithm is a famous algorithm in computer science, used for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956.

## How Dijkstra's Algorithm Works:

1.  **Initialization**: It starts with a source node and initializes the shortest path to all other nodes as infinity (or a very high value), and to the source node as 0.

2.  **Exploration of Neighbors**: The algorithm then repeatedly selects the node with the smallest known distance from the source node that hasn't been processed yet.

3.  **Distance Update**: For the selected node, it checks all its neighbors. If the sum of the current shortest distance to that node and the weight of the edge to a neighbor is less than the known distance to the neighbor, it updates the shortest distance to the neighbor.

4.  **Mark as Processed**: The node is then marked as processed, meaning it will not be checked again.

5.  **Repeat**: Steps 2-4 are repeated until all nodes have been processed or the shortest path to all reachable nodes have been found.

## Characteristics:

-   **Greedy Algorithm**: It makes the optimal choice at each step, aiming to find the global optimum.
-   **Single-Source Shortest Paths**: It finds the shortest paths from a single source node to all other nodes.
-   **Non-Negative Weights**: It works correctly only when all edge weights are non-negative.

## Real-World Applications:

1.  **GPS and Routing Systems**: One of the most common applications is in GPS systems for finding the shortest path between two locations on a map.

2.  **Network Routing Protocols**: In computer networks, routing protocols like OSPF (Open Shortest Path First) use Dijkstra's algorithm to calculate the shortest path for data packets.

3.  **Social Networking Applications**: Finding shortest paths in social networks, like the degrees of separation between people.

4.  **Urban Planning and Traffic Management**: Used for analyzing traffic patterns and planning road networks in urban areas.

5.  **Telecommunications**: Used in telephone network systems to route calls through the network in the most efficient way.

6.  **Biological Networks**: In bioinformatics, it's used to understand and analyze the pathways in biological networks.

7.  **Robotics and Artificial Intelligence**: For pathfinding in robotics and certain AI applications, like navigating through a grid or network.

Dijkstra's algorithm is highly versatile and forms the basis of many complex systems and applications in the real world, where the efficient traversal of a graph is necessary.

[Vis-js Demo](./vis-js.html)

[ChatGPT Dialog](https://chat.openai.com/c/5749b49c-71d3-43d1-aa8b-a7ed6528d7b8)