# Learning Graph MicroSimulation

This MicroSim has several prompts.  Each prompt output is
used as an input to the next prompt.

## Course Description

We use Bloom's taxonomy to create a course description that
begins with foundational concepts and progresses to hands-on activities
to generate new content.

[Course Description](00-course-description.md)

## Enumerating Concepts

We use the course description to generate a flat list of
around 150 core concepts used in this course.

[Enumerating Concepts](./01-enumerating-concepts.md)

## Concept Dependencies

Once we have a list of our core concepts, we ask a LLM
to help create a dependency graph.

[Concept Dependencies](02-concept-dependencies.md)

## Concept Taxonomies

We then try to categorize these concepts into a taxonomy
that is used to color the network graph learning map.

[Concept Taxonomies](03-concept-taxonomies.md)

## View Legend

Once we have a taxonomy, we need to convert that list
into an HTML table that can be used as a legend that
appears on the left sidebar.  This version has
a way to collapse the sidebar.

[View Legend](view-legend.html)

## View Graph

Finally, we put it all together in a graph viewer.
This version reads a JSON file that has some
group names added.  It also attempts to put
the foundation elements to the left and some
advanced topics on the right.

[View Graph](./view-graph.html)


