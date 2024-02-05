# Graph Matching

1[](./student-mentor-match.png)

Many people don't list matching problems as simply graph problems.
Perhaps this is because people try to use spreadsheets to attack
matching problems. However, as we will see, graphs are ideal
at helping people optimize matching problems.

We are going to look at several examples:

1. The **schema matching** problem occurs when are attempting to import new data into a database and we need to map new incoming data elements to existing data elements.  The [schema matching](https://en.wikipedia.org/wiki/Schema_matching) problem is a key
cost factor when building data warehouse systems.  After the data maps
are created code can be generated to convert incoming data to data inserts and updates into an existing system.
2. The **resource matching** problem is where we are trying to match things like people to positions, students to mentors or people to projects within a
set of constraints.  For example, matching students that have five preferences to 20 potential projects.
There are existing Python libraries such as [matching](https://pypi.org/project/matching/) that are useful for executing these algorithms, but these algorithms
often lack a user interface for viewing, testing and interactively changing the match suggestions.
3. The **entity resolution** problem is where new records are being added to an existing database but they must be linked to the correct record.  This is also known as the [Record Linkage](https://en.wikipedia.org/wiki/Record_linkage), data matching or data linkage problem.

## Some Sample Matching p5.js Example

* [Curved Line Matching](https://editor.p5js.org/dmccreary/sketches/yAEIj4Ulq)

* [Data Element Matching](https://editor.p5js.org/dmccreary/sketches/YzOOxxDgR)

* [Custom Curve With Percent](https://editor.p5js.org/dmccreary/sketches/T0tSaTPCr) - I used generative AI to create a custom version of the curve() function that had one additional parameter: the percent of the line to be drawn.

## Sample Vis.js Arrows for Matching

* [Vis.js Arrow Alignment](https://visjs.github.io/vis-network/examples/network/edgeStyles/arrowAlignment.html) - this is a great demo of "arrow alignment" using curves.

## References

* [Wikipedia Schema Matching](https://en.wikipedia.org/wiki/Schema_matching)
* [Wikipedia Entity Resolution](https://en.wikipedia.org/wiki/Record_linkage)
* [Entity Resolution Quantexa](https://www.quantexa.com/resources/entity-resolution-guide/)