---
title: MicroSim Template
description: Template for creating new p5.js MicroSims with basic canvas setup and drawing examples
quality_score: 60
---

# MicroSim Template

<iframe src="template.html" width="100%" height="450px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/graph-algorithms/sims/template/template.html" width="100%" height="450px" scrolling="no"></iframe>
```

[Run Template MicroSim in Fullscreen](template.html){ .md-button .md-button--primary }

## Description

This MicroSim template teaches the basic structure of a p5.js sketch, demonstrating how to specify the drawing of a static filled circle. Use this as a starting point for creating new MicroSims.

### How to Use

1. Copy this template to create a new MicroSim
2. Modify the sample prompt to describe your visualization
3. Update the JavaScript code to match your requirements
4. Add documentation specific to your topic

## Sample Prompt

```linenums="0"
Create a single file p5.js sketch.
Draw a green circle on a 600x400 canvas with a radius of 200.
```

## Sample Response

```javascript
let canvasHeight = 400;
let aspectRatio = 1.91; // Open Graph standard
let canvasWidth = canvasHeight * aspectRatio;
let radius = 200;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas-container');
  fill(245);
  rect(0, 0, canvasWidth, canvasHeight);
  fill('green');
  circle(canvasWidth/2, canvasHeight/2, radius);
}
```

## Lesson Plan

### Grade Level, Subject and Topic

9th grade geometry. Circle and radius.

### Activities

#### Fill Color

Change the color in the prompt. You can specify any one of the [140 named colors](https://www.w3schools.com/tags/ref_colornames.asp).

#### Border Weight

Change the prompt to include a black border of width 10.

#### Border Color

Change the prompt to make the border purple.

#### Change the Radius

Change the prompt to make the circle smaller or larger by changing the radius from 10 to 200.

#### Change the Location

Change the prompt to move the circle to the left or right.

## Creating a New MicroSim

### Steps

1. Create a new directory under `docs/sims/`
2. Copy these template files
3. Rename files to match your MicroSim name
4. Update the HTML, JavaScript, and markdown content
5. Add a `metadata.json` file with Dublin Core metadata
6. Add to the navigation in `mkdocs.yml`

### Best Practices

- Use descriptive variable names
- Follow the canvas size conventions
- Include a control region for interactive elements
- Document all parameters and controls

## References

- [p5.js Reference](https://p5js.org/reference/) - Official p5.js documentation
- [p5.js Examples](https://p5js.org/examples/) - Example sketches
- [W3Schools Color Names](https://www.w3schools.com/tags/ref_colornames.asp) - Named CSS colors
