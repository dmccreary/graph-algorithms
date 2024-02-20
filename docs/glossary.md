# Glossary of Terms for Graph Algorithms Course

#### A\* Search Algorithm

An algorithm that finds the shortest path from a start node to a target node in a weighted graph. It uses heuristics to optimize the search process. Example: GPS navigation systems use A\* to find the shortest route.

#### Anomaly Detection

The identification of items, events, or observations in data that do not conform to an expected pattern. In graph terms, this often involves identifying unusual subgraphs or patterns. Example: Detecting unusual patterns in financial transactions which may indicate fraudulent activity.

#### Attention Mechanisms in Graphs

Incorporation of attention mechanisms in graph neural networks, allowing the model to focus on important parts of the graph while making predictions. Example: Improving performance in document classification tasks where documents are represented as word co-occurrence graphs.#### Behavioral Analytics

The use of data about people's behavior to understand intent and predict future actions. In graph analysis, this involves studying how individuals interact within a network. Example: Analyzing customer transaction patterns to identify potential cases of money laundering.

#### Bellman-Ford Algorithm

An algorithm that computes shortest paths from a single source vertex to all other vertices in a weighted graph. It can handle negative weight edges. Example: Used in network routing protocols.

#### Big-O Notation

A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is a critical concept in analyzing the performance and scalability of algorithms. Example: Describing the time complexity of graph algorithms, like O(n^2) for certain implementations of Dijkstra's algorithm.

#### Breadth-First Search (BFS)

An algorithm for traversing or searching tree or graph data structures. It starts at a selected node and explores all neighbor nodes at the present depth before moving to nodes at the next depth level. Example: Used in social networking applications to find people within a certain number of degrees of separation.

#### Centrality Measures

Metrics used in network analysis to determine the importance or influence of a particular node within a graph. Common measures include degree centrality, closeness centrality, betweenness centrality, and eigenvector centrality. Example: Identifying key influencers in a social network.

#### Churn Prediction

The process of identifying signals that indicate a customer is likely to stop using a service. Graph analysis can help in identifying patterns that precede customer churn. Example: Analyzing customer interaction networks to predict which customers are at risk of churning.

#### Clustering Coefficient

A measure of the degree to which nodes in a graph tend to cluster together. High clustering coefficients indicate a tendency of nodes to form tightly knit groups. Example: Used in market analysis to identify communities or segments within customer networks.

#### Cohort Analysis

A type of behavioral analytics that takes the data from a given dataset (like an e-commerce platform) and rather than looking at all users as one unit, it breaks them into related groups for analysis. Graphs can be used to visualize and analyze these cohorts. Example: Grouping customers by the date of their first purchase and analyzing their behavior patterns.

#### Community Detection

The process of identifying groups of nodes in a graph that are more densely connected internally than with the rest of the network. Example: Used in social network analysis to identify groups of closely connected individuals.

#### Complex Event Processing (CEP)

A method of tracking and analyzing streams of information (data) about things that happen (events), and deriving a conclusion from them. Used in finance for real-time fraud detection by analyzing patterns of transactions. Example: Monitoring financial transactions in real-time to identify potentially fraudulent activities.

#### Customer 360 View

Refers to an integrated view of customer data compiled from various touchpoints and sources, providing a comprehensive picture of the customer journey. In graph analysis, this might involve creating a graph that connects all customer interactions with products, services, and brand touchpoints. Example: Building a complete profile of a customer's interactions, preferences, transaction history, and feedback.

#### Customer Lifetime Value (CLV)

A prediction of the net profit attributed to the entire future relationship with a customer. Graph theory can help in understanding and predicting CLV by analyzing customer behavior patterns and their network effects. Example: Using transaction networks to predict future customer spending and loyalty.

#### Degree

![](img/degree.png)

The number of edges connected to a vertex. In directed graphs, this includes in-degree (number of incoming edges) and out-degree (number of outgoing edges). For instance, in a social network, a user's vertex degree might correspond to their number of friends or connections.

#### Depth-First Search (DFS)

An algorithm used for traversing or searching a graph. It starts at the root and explores as far as possible along each branch before backtracking. Example: Used in solving puzzles such as mazes.

 #### Deterministic Algorithm
 A type of algorithm that, given a particular input, will **always** produce the same output with a predictable computation process.
 
 In deterministic algorithms, each step and decision is specifically defined and does not involve any randomness or probability. The outcome and the state of the system at each stage of the algorithm are entirely predictable based on the input.

 Deterministic algorithms also have a high degree of explainability compared to machine-learning models.

**Example:** A common example of a deterministic algorithm is the [depth-first search](#depth-first-search-dfs) algorithm.

See also: Machine Learning Model

#### Dijkstra's Algorithm

An algorithm that finds the shortest paths between nodes in a graph, which may represent, for example, road networks. It can be used for weighted graphs without negative weights. Example: Used in GPS devices to find the shortest driving route.

#### Directionality

Refers to the presence of directed edges in a graph, where each edge has a direction, typically indicated by an arrow. In a webpage link graph, an edge from page A to page B is directed, showing a link from A to B.

#### Distributed Graph Processing

A method of processing large graphs that are too big to fit in a single machine's memory by distributing the data across multiple machines. Example: Google's Pregel and Apache Giraph are frameworks for distributed graph processing.

#### Dynamic Graphs

Graphs that evolve over time with additions or deletions of nodes, edges, or changing edge weights. Machine learning on dynamic graphs involves adapting to these changes. Example: Analyzing transaction networks in banking for real-time fraud detection.

#### Edge

A connection between two vertices in a graph, which can be directed (indicating a one-way relationship) or undirected (indicating a two-way relationship).

For example, in a road network graph, an edge could represent a road connecting two intersections.  A one-way street could be represented as a directed edge.

In the [LPG](#labeled-property-graph) graphs that we study in this book, all our edges connect two vertices and are called binary edges.  Edges
are also typed so that they connect specific types of nodes.

* Also known as: link, arc, relationship

#### Edge Partitioning

A technique used in distributed graph processing where edges are distributed across different machines or processes, which can help in parallelizing computation and managing large-scale graphs. Example: Used in handling social network graphs that are too large for single-machine processing.

#### Edge Prediction

A machine learning task in graph analysis where the goal is to predict the formation or existence of edges in the graph based on observed data. Example: In a collaboration network, predicting future collaborations based on historical data.

#### Edge Weight Anomalies

Refers to irregularities or unexpected values in the weights of edges in a graph. In a financial transaction graph, for example, edge weights could represent the amount of money transferred. Example: Identifying unusually large transactions in a financial network that might suggest money laundering.

#### Floyd-Warshall Algorithm

An algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). Example: Used in high-frequency trading for finding the quickest path through a network.

#### Forensic Analysis

The use of scientific methods and techniques to investigate crime or fraud. In graph theory, this involves examining the structure and connections within the graph to uncover illicit activities. Example: Investigating healthcare claims to uncover patterns indicative of fraudulent practices.

#### Graph Analytics

The process of analyzing data in a graph format, where modeling, statistics, and machine learning techniques are applied to the graph data. Example: Used in fraud detection by analyzing transaction networks to identify unusual patterns.

#### Graph Autoencoders

A neural network model that is trained to encode graph structure into a low-dimensional space and then decode this representation back to a graph. Example: Used for feature learning on graph-structured data.

#### Graph Connectivity

Refers to the degree to which the vertices within a graph are connected. Strong connectivity in a directed graph means there is a path from each vertex to every other vertex. Example: Assessing network resilience in computer networks.

#### Graph Convolutional Networks (GCNs)

A type of Graph Neural Network that generalizes convolutional neural networks to graph-structured data. GCNs are effective in handling non-Euclidean data inherent in graphs. Example: Used in drug discovery for predicting molecular interactions.

#### Graph Database

A database that uses graph structures for semantic queries with nodes, edges, and properties to represent and store data. They are particularly useful for analyzing interconnections in large data sets. Example: Neo4j and Amazon Neptune are popular graph databases.

#### Graph Embeddings

The process of transforming nodes, edges, and their features into a vector space while preserving graph topology and properties. These embeddings can be used in various machine-learning applications. Example: Creating vector representations of social network users to feed into machine learning models for friend suggestions.

#### Graph Neural Networks (GNNs)

A type of neural network designed to directly operate on the graph structure. GNNs are used for learning graph embeddings by leveraging node features and structure. Example: Used in recommendation systems where both users and items are represented in a graph.

#### Graph Partitioning

The process of dividing a graph into smaller components while minimizing the number of edges between different components. This is particularly important for processing large graphs on multiple machines. Example: Used in parallel computing to optimize the performance of graph algorithms.

#### Graph Pattern Recognition

The task of identifying regularities or patterns within graph data. This is crucial in detecting structured patterns associated with fraudulent activities. Example: Detecting common patterns in out-of-network referral practices that might suggest fraudulent behavior.

#### Graph Scale

The "Scale" in the graph benchmarks refers to the size of the problem being solved. Specifically, it indicates the exponent in the graph size, which is 2 raised to the power of the "Scale" value.

For example, the [Graph500](http://graph500.org) benchmark measures the performance of supercomputers in handling large-scale graph processing tasks, which are common in data-intensive applications like social network analysis, cybersecurity, and bioinformatics.

In the recent graph 500 listings:

-   A Scale of 42 means the graph has 2 to the 42nd power vertices (nodes).
-   A Scale of 41 means the graph has 2 to the 41st power vertices.

2 to the 42nd power equals 4,398,046,511,104. This means a graph with a Scale of 42 in the Graph500 benchmark would have over 4.39 trillion vertices.

The larger the scale, the larger the graph, and thus, the more challenging the computation. This scale value helps to quantify the size and complexity of the graph problem that the supercomputer is capable of handling efficiently.

#### GTEP (Billion of Traversed Edges per Second)

A performance benchmark metric used primarily in the field of graph computing and data analysis. It quantifies the speed at which a system can traverse the edges in a graph data structure. One edge traversal is counted each time the system moves from one node to another along an edge connecting them.

GTEP metric is crucial in evaluating the efficiency of graph processing systems, which are widely used in various applications like social network analysis, recommendation engines, and network topology analysis. Higher GTEP values indicate faster data processing capabilities, which is vital for handling large-scale, complex graph structures.

#### Hamiltonian Cycle

A cycle in a graph that visits each vertex exactly once and returns to the starting vertex. Determining if such a cycle exists in a graph is a well-known problem. Example: Used in solving routing problems like the traveling salesman problem.

#### Heuristic

A technique designed for solving a problem more quickly when classic methods are too slow, or for finding an approximate solution when classic methods fail to find any exact solution. Example: Used in A\* search algorithm for pathfinding and graph traversal.

#### Homogeneous Graph
A graph structure where all nodes (or vertices) are of the same type. This uniformity in node types distinguishes it from heterogeneous graphs where nodes have multiple types. An example is a citation graph where each node represents a scientific paper.

Homogeneous graphs are ideal for identifying patterns or shapes within networks.  They are also used for benchmarking where the only key matric is number of nodes traversed per second.

#### Hypergraph

A type of graph that has edges that can connect more than two nodes.  In the [LPG](#labeled-property-graph) models used in this book, edges connect pairs of nodes.

Although many academics favor the use of hypergraphs for theoretical research, there is no evidence they have better abilities to represent knowledge.  Any hypergraph can be converted into an LPG graph by converting edges with more than two connections into a node.  The concept of directionality is also much more complex in hypergraphs.

Unlike distributed graphs like TigerGraph, MemGraph and DGraph, all of which work with binary edges, there are no distributed hypergraph products.

#### Inbound Edge

In a directed graph, it is an edge pointing towards a particular vertex. For example, in a traffic network, an inbound edge to a vertex might represent a road leading into a city.

#### Influence Maximization

A problem in social network analysis to determine a set of nodes that should be targeted to maximize the spread of information or influence. Example: Used in viral marketing campaigns to identify potential early adopters for new products.

#### Influence Networks

Networks that map the influence customers or key opinion leaders have within their social circles. This can be particularly important for understanding how information, trends, and opinions spread among customers. Example: Identifying key influencers within a network who can sway the purchasing decisions of others.

#### Know Your Customer (KYC) Compliance

A standard in the finance industry that ensures investment advisors know detailed information about their clients' risk tolerance, investment knowledge, and financial position. Graphs can be used to map customer relationships and transactions to ensure compliance. Example: Analyzing transaction networks to ensure customers are not involved in money laundering.

#### Kruskal's Algorithm

An algorithm that finds a minimum spanning tree for a connected weighted graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. Example: Used in designing networks like water supply networks.

#### Labeled Property Graph

The term "Labeled Property Graph Model" or (LPG) refers to a specific type of graph database model that is primarily used for storing and managing complex networks of data.  In the LPG model, both nodes and edges have properties.  Edges may also optionally have a direction.  Each node has a specific type that
can determine what its valid relationship and properties are.

This course uses the LPG model.

#### Link Prediction

The problem of predicting the existence of a link between two entities in a network. Example: Used in recommendation systems to suggest new connections on professional networks like LinkedIn.

#### MapReduce

A programming model suitable for processing large data sets with a parallel, distributed algorithm on a cluster. Example: Used in processing large-scale graph data, as in Google's implementation of the PageRank algorithm.

#### Maximal Flow

Refers to the greatest possible flow rate in a network flow problem. Algorithms like Ford-Fulkerson are used to compute this. Example: Used in telecommunications to determine the maximum data transfer speed through a network.

#### Minimum Spanning Tree (MST)

A subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Example: Used in designing the least expensive network layout (like electrical grids or road networks).

#### Money Laundering Detection

The process of identifying financial transactions that are part of a money laundering scheme. Graph analysis is used to trace the complex web of transactions typical of money laundering schemes. Example: Tracing transactions through multiple accounts to uncover the layering stage of money laundering.

#### Network Flow

An optimization and graph algorithm to find the maximum flow in a flow network. It is used in various applications, such as traffic system, fluid dynamics, and network routing. Example: Calculating the maximum number of vehicles that can pass through a road network.

#### Network Optimization

The process of optimizing the design or operation of a network. In business, this often relates to logistics, like optimizing the layout of a distribution network to minimize transport costs or time. Example: Optimizing supply chain networks.

#### Network Segmentation

The process of dividing a customer network into non-overlapping segments or groups, based on certain criteria like demographics, purchasing behavior, or social connections. Example: Creating targeted marketing campaigns based on customer segments identified through network analysis.

#### Node2Vec

An algorithmic framework for learning continuous feature representations for nodes in networks. Node2Vec uses flexible notions of a node's network neighborhood and can learn representations that maximize the likelihood of preserving network neighborhoods. Example: Used in fraud detection to represent transaction patterns.

#### Outbound Edge

In a directed graph, it is an edge that originates from a vertex and points away from it. For instance, in a citation network, an outbound edge from a research paper vertex could signify a citation to another paper.

#### PageRank Algorithm

An algorithm used by Google Search to rank web pages in their search engine results. It is based on the structure of the web and links between pages. Example: Ranking web pages in search engine results.

#### Path Analysis

In customer journey analytics, path analysis involves mapping the sequence of touchpoints or interactions a customer has with a brand before making a purchase decision. Example: Understanding the most common paths to purchase and optimizing marketing strategies accordingly.

#### Prim's Algorithm

An algorithm that finds a minimum spanning tree for a connected weighted undirected graph. It finds a subset of the edges that forms a tree, including every vertex, where the total weight is minimized. Example: Used in network design, particularly in the design of cable networks.

#### Scalability

The property of a system to handle a growing amount of work by adding resources. In the context of graph algorithms, it refers to the ability of the algorithm to handle increasingly large graphs. Example: Evaluating whether an algorithm like BFS can scale to graphs with billions of vertices.

#### Sentiment Analysis

The use of natural language processing, text analysis, and computational linguistics to identify and extract subjective information from source materials. When applied to graph theory, sentiment analysis can be used to gauge public opinion about a product or service based on social network data. Example: Analyzing social media networks to understand customer feelings towards a brand or product.

#### Shortest Path Problem

A problem of finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized. Example: Used in GPS systems for finding the shortest driving route.

#### Social Listening

The monitoring of social media channels for mentions of a brand, product, competitors, or anything related to business. Combined with graph analysis, it can reveal insights about customer preferences and market trends. Example: Tracking brand mentions on social media to gauge customer sentiment and respond to customer needs proactively.

#### Social Network Analysis (SNA)

The process of investigating social structures through the use of network and graph theories. It characterizes networked structures in terms of nodes (individual actors, people, or things within the network) and the ties, edges, or links (relationships or interactions) that connect them. Example: Analyzing employee relationships in a corporation to improve communication or collaboration.

#### Social Network Analysis in Fraud Detection

Analyzing the social connections between entities (such as individuals, organizations, bank accounts) to identify fraudulent patterns of behavior. Example: Identifying fraud rings in insurance claims by analyzing the network of claimants and providers.

#### Sparse Graph

A graph in which the number of edges is close to the minimal number of edges. Sparse graphs contrast with dense graphs, where the number of edges is close to the maximal number of edges. Example: Social networks are often modeled as sparse graphs.

#### Spectral Graph Theory

A field that applies concepts from linear algebra and spectral theory to graph theory. It is used in machine learning for graph embedding and clustering. Example: Clustering of web pages based on their similarity in the hyperlink structure.

#### Streaming Algorithms

Algorithms designed for processing data streams where the input is presented as a sequence of items and can be examined only once or a small number of times. Example: Used in real-time analysis of large-scale graph data, like analyzing trends from social media feeds.

#### Subgraph Matching

The process of finding instances of a smaller graph (subgraph) within a larger graph. This has applications in various fields, including pattern recognition, bioinformatics, and social network analysis. Example: Used in chemical compound databases to find compounds that include a particular molecular structure.

#### Suspicious Activity Reports (SARs)

Reports filed by financial institutions to flag suspected instances of money laundering or fraud. Graph analysis can help in identifying relationships and patterns that lead to the filing of SARs. Example: Analyzing transaction networks to detect patterns that necessitate the filing of a SAR.

#### Tarjan's Algorithm

An algorithm for finding the strongly connected components of a directed graph. Example: Used in compilers to find loops in control flow graphs.

#### Temporal Graph Analysis

The study of graphs that change over time, where relationships between nodes can appear, disappear, or change their properties. This is crucial for analyzing dynamic systems. Example: Monitoring communication networks to identify changes in interaction patterns over time.

#### Time Series Analysis on Graphs

The study of graphs in which the nodes and/or edges have time-series data associated with them. This is particularly relevant in dynamic networks where relationships evolve over time. Example: Analyzing consumer behavior over time in a retail network.

#### Topological Sorting

An algorithm used to linearly order the vertices of a graph such that for every directed edge from vertex �u to vertex �v, �u comes before �v in the ordering. Example: Used in scheduling jobs from the given dependencies among jobs.

#### Touchpoint Analysis

The analysis of individual points of interaction between a customer and a brand to assess what part they play in the customer's journey. In graph theory, this involves analyzing how different touchpoints are connected and how they influence the customer's decision-making process. Example: Evaluating the effectiveness of different marketing channels in influencing customer decisions.

#### Union-Find Algorithm

An algorithm that performs two useful operations on a set: finding the root of an element and merging two sets. It is particularly useful for graph problems that involve partitioning elements into disjoint sets. Example: Used in Kruskal's algorithm for finding the minimum spanning tree.

#### Unweighted Graph

A graph where edges do not have weights. Connections are either present or absent without any additional quantitative attributes. An example is a simple friendship network where edges simply indicate whether a friendship exists between two people.

#### Vertex (Node)

A fundamental unit of which graphs are formed, representing an entity. For instance, in a social network graph, each user can be represented as a vertex.

#### Vertex Cover

A set of vertices that includes at least one endpoint of every edge of the graph. The problem of finding a minimum vertex cover is a classical optimization problem in computer science. Example: Used in network security to determine the minimum number of points to control to monitor network traffic.

#### Weighted Graph

![](img/weighted-graph.png)

A graph where each edge has a numerical value (weight) associated with it, representing quantities like distance, cost, or capacity. A common example is a road network where edges are roads with weights representing distances.

