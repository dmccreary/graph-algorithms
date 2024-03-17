# Degree V2

[Run the MicroSim](degree-v2.html)

## Prompt

```linenums="0"
Create a p5.js sketch on a 500x600 canvas.
This sketch demonstrates how the degree of a network graph changes based on the number of connections between vertices of the graph.
The drawing region is 500x500.  The control region is the bottom 100 below the drawing region.
Set a global variable of canvasWidth to be 500.
Set a global variable of drawingHeight to be 500.
Set a global variable of controlRegionHeight to be 100.
Create a function that draws N small circles around the edge of a large circle.
N is a parameter of the function.
The small circles are spaced evenly around the edge of the large circle.
The small circles have a maximum radius of 20.
The large circle has a radius of 200.
Add a slider called nSlider that changes the number of small circles on the edge of the large circle.
The range of nSlider is from 4 to 20 with a default value of 10.
Add a second slider called degreeSlider that changes the number of edges between each small circle and other small circles.
The degreeSlider ranges from 1 to N.
Draw lines from each small circle to others based on the degree slider.
```