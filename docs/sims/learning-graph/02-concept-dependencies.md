## Graph Algorithm Concept Dependencies

```linenums="0"
Our next step is to create a fully connected dependency graph
for learning these Concepts.
In this step, for each Concept on this list, create a new
list of other concepts on which it depends.  If a concept
depends on a specific concept that is not listed,
then we will need to add it as a new concept.
This will help us determine the teaching order of the Concepts.

Return the new list as a CSV file using the following format:

1. The first column in the CSV file is a numeric concept
ID you assigned in the list above.
2. The second column is the concept name.
3. The third column is a pipe-delimited list of the Concept IDs that the concept depends upon.

Check your results to make sure that all concepts are connected to at least one other concept.

Foundation Concepts are concepts that have no dependant concepts in this set.  They have an empty third column.
```

```python
import csv

# List of concepts and their dependencies
concepts = [
    (1, "Graph Definition", []),
    (2, "Nodes", [1]),
    (3, "Edges", [1]),
    (4, "Directed Graph (Digraph)", [2, 3]),
    (5, "Undirected Graph", [2, 3]),
    (6, "Weighted Graphs", [2, 3]),
    (7, "Unweighted Graphs", [2, 3]),
    (8, "Cyclic Graphs", [2, 3, 4, 5]),
    (9, "Acyclic Graphs (DAG)", [2, 3, 4, 5]),
    (10, "Graph Density", [2, 3]),
    (11, "Degree of a Node", [2]),
    (12, "In-degree", [4, 11]),
    (13, "Out-degree", [4, 11]),
    (14, "Path", [2, 3]),
    (15, "Walk", [2, 3]),
    (16, "Cycle", [2, 3, 8]),
    (17, "Connected Graph", [2, 3]),
    (18, "Disconnected Graph", [2, 3, 17]),
    (19, "Subgraph", [1]),
    (20, "Bipartite Graph", [2, 3]),
    (21, "Complete Graph", [2, 3]),
    (22, "Multigraph", [2, 3]),
    (23, "Graph Isomorphism", [1]),
    (24, "Self-loop", [2, 3]),
    (25, "Adjacent Nodes", [2]),
    (26, "Incident Edges", [3]),
    (27, "Graph Adjacency Matrix", [2, 3]),
    (28, "Graph Adjacency List", [2, 3]),
    (29, "Graph Incidence Matrix", [2, 3]),
    (30, "Graph Traversal", [2, 3]),
    (31, "Depth-First Search (DFS)", [2, 3, 30]),
    (32, "Breadth-First Search (BFS)", [2, 3, 30]),
    (33, "Stack (DFS)", [31]),
    (34, "Queue (BFS)", [32]),
    (35, "Backtracking", [31]),
    (36, "Recursion (DFS)", [31]),
    (37, "Shortest Path Problem", [2, 3, 30]),
    (38, "Dijkstra’s Algorithm", [2, 3, 37]),
    (39, "Bellman-Ford Algorithm", [2, 3, 37]),
    (40, "A* Search Algorithm", [2, 3, 37]),
    (41, "Floyd-Warshall Algorithm", [37]),
    (42, "All-Pairs Shortest Path (APSP)", [37]),
    (43, "Single-Source Shortest Path (SSSP)", [37]),
    (44, "Negative Weight Cycles", [2, 3, 37]),
    (45, "Minimum Spanning Tree (MST)", [2, 3, 30]),
    (46, "Kruskal’s Algorithm", [45]),
    (47, "Prim’s Algorithm", [45]),
    (48, "Union-Find Algorithm", [2, 45]),
    (49, "Cycle Detection (MST)", [45]),
    (50, "Cut-Vertices", [2, 3, 30]),
    (51, "Bridges (Edge Cut)", [2, 3, 30]),
    (52, "Eulerian Path", [2, 3, 14]),
    (53, "Eulerian Circuit", [2, 3, 14]),
    (54, "Hamiltonian Path", [2, 3, 14]),
    (55, "Hamiltonian Cycle", [2, 3, 14]),
    (56, "Traveling Salesman Problem (TSP)", [2, 3, 54]),
    (57, "Approximation Algorithms (TSP)", [56]),
    (58, "Heuristics (TSP)", [56]),
    (59, "Graph Coloring", [2, 3]),
    (60, "Chromatic Number", [59]),
    (61, "Greedy Coloring Algorithm", [59]),
    (62, "Clique", [2, 3]),
    (63, "Maximum Clique Problem", [62]),
    (64, "Independent Set", [2, 3]),
    (65, "Maximal Independent Set", [64]),
    (66, "Dominating Set", [2, 3]),
    (67, "Vertex Cover", [2, 3]),
    (68, "Minimum Vertex Cover", [67]),
    (69, "Planar Graphs", [2, 3]),
    (70, "Graph Embedding", [69]),
    (71, "Kuratowski’s Theorem", [69]),
    (72, "Graph Minor Theorem", [69]),
    (73, "Graph Duality", [69]),
    (74, "Planarity Testing", [69]),
    (75, "Face of a Graph (Planar)", [69]),
    (76, "Topological Sorting", [2, 3, 9]),
    (77, "DAG Applications", [9]),
    (78, "Strongly Connected Components (SCC)", [4]),
    (79, "Tarjan’s Algorithm (SCC)", [78]),
    (80, "Kosaraju’s Algorithm (SCC)", [78]),
    (81, "Articulation Points", [2, 3]),
    (82, "Bridge Finding Algorithm", [2, 3]),
    (83, "Graph Matching", [2, 3]),
    (84, "Bipartite Matching", [83]),
    (85, "Hopcroft-Karp Algorithm", [84]),
    (86, "Stable Matching Problem", [2, 3]),
    (87, "Gale-Shapley Algorithm", [86]),
    (88, "Network Flow", [2, 3]),
    (89, "Max Flow Problem", [88]),
    (90, "Ford-Fulkerson Algorithm", [89]),
    (91, "Edmonds-Karp Algorithm", [90]),
    (92, "Min-Cut Max-Flow Theorem", [88]),
    (93, "Push-Relabel Algorithm", [88]),
    (94, "Dinic’s Algorithm", [88]),
    (95, "Capacity Scaling Algorithm", [88]),
    (96, "Circulation Problem", [88]),
    (97, "Multi-Commodity Flow", [88]),
    (98, "Cut-Set", [88]),
    (99, "Cut-Set Theorem", [88]),
    (100, "Flow Decomposition", [88]),
    (101, "Flow Networks", [88]),
    (102, "Graph Partitioning", [2, 3]),
    (103, "Graph Clustering", [2, 3]),
    (104, "k-Cuts Problem", [2, 3]),
    (105, "Modularity (Clustering)", [103]),
    (106, "Spectral Clustering", [103]),
    (107, "Girvan-Newman Algorithm", [103]),
    (108, "Louvain Method (Clustering)", [103]),
    (109, "Random Walk", [2, 3]),
    (110, "Markov Chains (Graphs)", [109]),
    (111, "Pagerank Algorithm", [109]),
    (112, "HITS Algorithm", [109]),
    (113, "Centrality Measures", [2, 3]),
    (114, "Degree Centrality", [113]),
    (115, "Betweenness Centrality", [113]),
    (116, "Closeness Centrality", [113]),
    (117, "Eigenvector Centrality", [113]),
    (118, "Katz Centrality", [113]),
    (119, "Graph Laplacian", [2, 3]),
    (120, "Spectral Graph Theory", [119]),
    (121, "Cheeger’s Inequality", [120]),
    (122, "Expander Graphs", [120]),
    (123, "Graph Diameter", [2, 3]),
    (124, "Graph Radius", [2, 3]),
    (125, "Eccentricity", [2, 3]),
    (126, "Graph Girth", [2, 3]),
    (127, "Percolation Theory", [2, 3]),
    (128, "Small-World Networks", [2, 3]),
    (129, "Scale-Free Networks", [2, 3]),
    (130, "Graph Randomization", [2, 3]),
    (131, "Erdős–Rényi Model", [130]),
    (132, "Barabási–Albert Model", [129]),
    (133, "Watts-Strogatz Model", [128]),
    (134, "Community Detection", [2, 3]),
    (135, "Block Models", [134]),
    (136, "Stochastic Block Model", [135]),
    (137, "Label Propagation Algorithm", [134]),
    (138, "Belief Propagation", [134]),
    (139, "Graph Neural Networks (GNN)", [2, 3]),
    (140, "Node Embeddings", [139]),
    (141, "DeepWalk Algorithm", [140]),
    (142, "Node2Vec Algorithm", [140]),
    (143, "GraphSAGE", [139]),
    (144, "GCN (Graph Convolutional Network)", [139]),
    (145, "GAT (Graph Attention Network)", [139]),
    (146, "Graph Recurrent Neural Networks", [139]),
    (147, "Link Prediction", [2, 3]),
    (148, "Graph Anomaly Detection", [147]),
    (149, "Knowledge Graphs", [2, 3]),
    (150, "RDF vs LPG Models", [149])
]

# Writing the entire list to a CSV file
csv_file_path = "/mnt/data/graph_algorithms_concepts_dependencies.csv"

with open(csv_file_path, mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Concept ID", "Concept Name", "Dependencies"])
    for concept_id, concept_name, dependencies in concepts:
        dependency_str = '|'.join(map(str, dependencies)) if dependencies else ''
        writer.writerow([concept_id, concept_name, dependency_str])

```
