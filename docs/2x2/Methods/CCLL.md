---
description: History of the CCLL method for the 2x2 Rubik's Cube.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";

# CCLL

<ReconViewer
puzzle="2x2x2"
scramble="U R F U R U' R' F'"
solution={`F R U R' U' F' . // CCLL
R' U' // Undo pseudo`}
/>

## Description

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre), [Joseph Briggs](CubingContributors/MethodDevelopers.md#briggs-joseph-shadowslice)

**Proposed:** 2012

**Steps:**

1. Solve the four bottom layer corners with one corner offset and a U layer corner attached.
2. Solve the four upper layer corners relative to the U layer corner on the bottom layer then undo the pseudo state.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=Conjugated_CxLL)

## Origin and Development

Conjugated CLL (CLL) is the placement of a U layer corner on the bottom layer with a D layer corner. The upper layer corners are now in a pseudo state and are solved relative to the U layer corner that was placed on the bottom layer.

This concept was first developed by Michael James Straughan in 2012 [^1].

![](img/CLL/CCLL.png)

In 2018, Joseph Briggs independently proposed the same concept as an application of the 42 method to the 2x2x2.

<YouTube embedId="AJjT5bYknls" />

[^1]: M. J. Straughan, "CLL Transformation Table," SpeedSolving.com, 8 February 2012. [Online]. Available: https://www.speedsolving.com/threads/cll-transformation-table.35293/.