
# SVG Filter Composer
SVG Filter Composer is a node-based programming interface designed to simplify the creation and iteration of SVG filters. Work started in Fall 2022.

## What are SVG Filters?
SVG filters provide a way to process an object's rendering result, transforming the appearance of the rendered graphics. This means they allow for a variety of visual effects on an SVG object, including,blurring, altering colors, adding textures, and creating lighting effects.

One of the most powerful features of SVG filters is that they can be chained together, allowing multiple filters to be applied to an object in a specified order. This enables the creation of complex visual effects that would be challenging to achieve otherwise.

Another distinguishing aspect of SVG filters is their resolution independence. Since SVG is a vector-based format, the effects applied through SVG filters remain crisp and sharp regardless of the display size or resolution.

## Architecture Overview
The architecture of the SVG Filter Composer is primarily built around the principle of declarative specifications for SVG filter elements. This approach enhances ease of maintenance. Here's a breakdown of how it works:

- *Specifications:* UI elements are mapped to specific attributes. These include value boundaries, serialization functions, and import functions.

- *Procedural Generation:* Each node manifests as a procedurally generated form. This is achieved by deriving from a recursive syntax tree. This choice of design ensures that if special element structures with children are declared, the UI will duly represent these children.

For instance, lighting elements might be allowed an arbitrary number of lighting nodes. Similarly, the `feMergeNode` can accommodate an arbitrary set of children.

*Flexibility in Design:* Taking the design gradient into consideration, users have the luxury to craft custom higher-order nodes. This is facilitated by grouping the foundational component nodes and then selecting the parameters that need exposure.