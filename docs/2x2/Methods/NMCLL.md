---
description: History of the NMCLL method for the 2x2x2 puzzle.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";
import ImageCollage from '@site/src/components/ImageCollage';

# NMCLL

<ReconViewer
puzzle="2x2x2"
scramble="R U R U2 R' U' R U' R'"
solution={`R U R' U R U2 R' . // NMCLL
U' R' // Undo pseudo`}
/>

## Description

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre)

**Proposed:** 2012

**Steps:**

1. Solve the four bottom layer corners with one side free to have pieces from another part of that side.
2. Solve the four upper layer corners then correct the pseudo layers.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=NMCLL)

### Origin and Development

NMCLL is when the bottom layer consists of pieces from outside of the bottom layer. This creates a pseudo layer and the term non-matching and the acronym NM is added to CLL.

A non-matching layer of corners was first proposed for the Roux method by Gilles Roux in 2004 [^roux-2004-1]. A recognition method was devised by Roux and development was completed by Roux and Michael James Straughan [^roux-2004-2] [^straughan-roux-2006] [^roux-2006].

![](img/CLL/Roux1.png)
![](img/CLL/Roux2.png)
![](img/CLL/Roux3.png)
![](img/CLL/Roux4.png)

In 2010, Straughan developed NMCLL specifically for 2x2x2 CLL [^straughan-2012-1] [^straughan-2012-2].

![](img/CLL/NMCLL1.png)
![](img/CLL/NMCLL2.png)
![](img/CLL/NMCLL3.png)

### Recognition

The original recognition method from 2006 involved first checking the orientation of the stickers that belong on the left and right sides of the upper layer. Then the user finds the locations of the stickers that belong on the upper layer.

In 2010, Straughan developed an improved recognition method [^straughan-roux-2010] [^roux-2010]. The first step remains the same, but in the second step the user checks pre-determined positions for a pattern.

![](img/CLL/NMCLL4.png)
![](img/CLL/Roux4.png)

In 2021, Straughan devised a new recognition method that was then developed into a document by Tim Mosher [^straughan-mosher-2021]. The steps are the same as the previous method, with the difference being that only two pre-determined positions need to be checked in the second step.

![](img/CLL/ATCRM.png)

[^roux-2004-1]: G. Roux, ""LL" corners," Yahoo! Groups - Speed Solving Rubik's Cube, 12 December 2004. [Online].
[^roux-2004-2]: G. Roux, "Step 3," Roux's website, 2004. [Online]. Available: https://web.archive.org/web/20041214140729/http://grrroux.free.fr:80/method/Step_3.html.
[^straughan-roux-2006]: M. J. Straughan and G. Roux, Personal communication, 3 October 2006. [Online].
[^roux-2006]: G. Roux, "Step 3," Roux's website, 2006. [Online]. Available: http://grrroux.free.fr/method/Step_3.html.
[^straughan-2012-1]: M. J. Straughan, "2x2 Pseudo Solving: Improving CLL and EG," SpeedSolving.com, 1 June 2012. [Online]. Available: https://www.speedsolving.com/threads/2x2-pseudo-solving-improving-cll-and-eg.37073/.
[^straughan-2012-2]: M. J. Straughan, "A2," Straughan's website, 2012. [Online]. Available: https://sites.google.com/site/athefre/other/nmcll?authuser=0.
[^straughan-roux-2010]: M. J. Straughan and G. Roux, Personal communication, 26 April 2010. [Online].
[^roux-2010]: G. Roux, "Step 3," Roux's website, 2010. [Online]. Available: https://web.archive.org/web/20111204185452/http://grrroux.free.fr/method/Step_3.html.
[^straughan-mosher-2021]: M. J. Straughan and T. Mosher, "ATCRM," Straughan's Website, 2021. [Online]. Available: https://sites.google.com/site/athefre/atcrm?authuser=0.