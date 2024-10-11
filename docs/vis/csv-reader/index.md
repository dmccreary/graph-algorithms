# CSV REader

## Prompt

```linenums="0"
I have a CSV file that has graph data in it.

The fields are:
ConceptID - the node id in a graph. Unique for all nodes. Required.
The ConceptName - a node label - Required
DependencyList - a pipe-delimited list of dependant ConceptIDs.  An edge goes from this concept to other concepts with a directed arrow.
CategoryID - a group ID for the concept.
CategoryLabel - the name of the category

There are about 11 Categories

ConceptID,ConceptName,DependencyList,CategoryID,CategoryLabel
1,Ohm's Law,2|3|4,1,Fundamental Concepts
2,Voltage,7,1,Fundamental Concepts
3,Current,7,1,Fundamental Concepts
4,Resistance,101,1,Fundamental Concepts
5,Power,2|3,1,Fundamental Concepts
6,Energy,5|102,1,Fundamental Concepts
7,Electric charge,120,1,Fundamental Concepts
8,Conductors,7,1,Fundamental Concepts
9,Insulators,7,1,Fundamental Concepts
10,Capacitance,2|7,1,Fundamental Concepts
11,Inductance,3|104,1,Fundamental Concepts

Please create a Python program that converts this CSV file into a JSON file that can be easily read by vis.js.  Assume that the category ID will become a group ID.
```