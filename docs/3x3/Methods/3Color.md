---
description: History of the 3-Color method for the Rubik's Cube.
id: 3Color
---

import TwistyPlayer from "@site/src/components/TwistyPlayer";
import Exhibit from "@site/src/components/Exhibit";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';
import YouTube from "@site/src/components/YouTube";

# 3-Color

<TwistyPlayer
  alg="x2 R2 F2 U2 R2"
 controlPanel="none"
/>

## Description

**Proposer:** [Michael Feather](CubingContributors/MethodDevelopers.md#feather-michael), [George Christos](CubingContributors/MethodDevelopers.md#christos-george)

**Proposed:** 1980

**Steps:**

1. Orient and position pieces, treating opposite faces as the same color.
2. Permute pieces to their correct layers.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=3-Color_Cube_Method)

## Introduction

In 1980, two individuals independently arrived at the idea of a human solving method based on reducing a scrambled Rubik's Cube to a 3-Color version of Rubik's Cube. One being Michael Feather and the other George Christos. However, the steps each person follows contain some key differences.

The 3 Color method is described as a human solving method to distinguish it from the similar, and prior existing, computer algorithm [Thistlethwaite](3x3/3x3ComputerAlgorithms.md). There is also the method called [Human Thistlethwaite](HumanThistlethwaite.md), which is an adaption of the Thistlethwaite algorithm for human use. For now, Human Thistlethwaite is kept as a separate entity due to its steps intentionally closely following those of the computer algorithm.

## Michael Feather

### Origin and Publication

During an email exchange with CubingHistory.com, Michael Feather described the origin of his development of the idea [^feather-straughan-2025-1]. In 1980 he obtained a cube and initially had been attempting to solve using the layer by layer method. He then tried to solve the corners or the edges first and eventually realized that it would be possible to simplify the solve by treating opposite face pieces as the same color. The method wasn't published at the time and the earliest known initial publication occurred in 2011 on a personal website [^feather-straughan-2025-2]. Feather provided to CubingHistory.com the files used on the website, and the publication year of 2011 is potentially confirmed based on dates contained within. Archive.org has only recorded as far back as 2016 [^feather-2016], however there is evidence of people viewing the site at least as far back as 2015 [^miler-2015].

> I created my 3-color method in 1980 after getting my first cube which I saw on a TV commercial. Solving took a few weeks, not exactly sure how long. After initial attempts to solve it became apparent that the last layer would be difficult so tried to simplify by doing either corners or edges first but it was still too tedious. In need of a way to further simplify I noticed that it would be much easier if opposite faces were the same color so tried solving as if it were a 3-color cube and had much more success. Nothing was written down, everything was done from memory.
>
> As for publishing, that wasn't until after I was able to get a cube simulator to work in the browser and despite the java version of Josef Jelínek's AnimCube being available since 2001, wasn't able to use it until many years later. Had looked at several different simulators over the years with varying degrees of success and finally got Josef's to work. Initial use was a website for my [cube solver](../3x3ComputerAlgorithms.md) and eventually got the idea to publish my solving method. The oldest backup I found of website for solving method is from 2011 (see attached zip file, the pages have been updated to use the cheerpj jvm but the originals are in file rz.tar.gz within the zip).

![](img/3-Color/FeatherOrigin.png)
![](img/3-Color/FeatherOrigin2.png)
<a href="/archive/MethodFiles/rc.zip">Backup Files</a>

In 2017, Feather moved the method documentation to a new web page [^feather-2017] [^feather-2025].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/3-Color/FeatherOld.png").default},
{ src: require("@site/docs/3x3/Methods/img/3-Color/FeatherNew.png").default}
]}
/>

> Original website versus the new website. The original website in this capture from 2017 contains a link at the top directing viewers to the new one.

### Steps

1. Corners
   1. Solve the corners as a 3-Color cube. On Rubik's Cube (a six color cube) this means to ensure that the corners of each face consist of any mix of opposite face colors.
   2. Reduce the corners to be half turn solvable.
   3. Optionally, the user can completely solve the corners at this point, or at a later stage.
2. Edges
   1. Solve the edges as a 3-Color cube. This means to orient and position opposite colored edges on either side.
   2. Permute edges to their correct sides.

A note is that the corners and edges can be solved in either order, with an additional possible step if the edges are solved first.

## George Christos

### Origin and Publication

On a personal website in 2004, George Christos stated that while in university in 1980, he obtained a cube and devised a custom solution [^christos-2004]. He stated that his solution was different from the layer by layer solutions that were popular at the time, and instead "does the whole puzzle at once". Christos also stated on the website that in 1982 he wrote a book detailing the solution, but that he wasn't able to publish it due to living in a foreign country at the time.

![](img/3-Color/ChristosFirstSite.png)

In February 2009, Christos published his 3-Color solution, making it available for purchase in booklet form [^christos-2009-1]. The booklet could be purchased on three different websites [^christos-2009-2] [^christos-2009-3] [^christos-2009-4]. Accompanying the post was a video providing an example solve [^christos-2009-5]. In March 2009, Christos posted another video that discusses the booklet [^christos-2009-6].

![](img/3-Color/Christos2.png)
<br/>
<YouTube embedId="upub1rOvfqI" />
<br/>
<YouTube embedId="18_WoFQp8WQ" />
<br/>
In July 2016, Christos made the booklet available for free through a YouTube video that displays each page of the booklet [^christos-2016-1]. On January 18 2025, Christos posted a comment on the video with a link to the .pdf version of the booklet [^christos-2009-7]. A backup link to the booklet is <a href="/archive/MethodFiles/g_christos_soln_rubics_cube_3x3.pdf ">here</a>. On the same day, Christos posted a short video to his Facebook page with an example solve of his method [^christos-2025] [^christos-2016-2].

<YouTube embedId="2t_EIyowSIY" />
<br/>
<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/3-Color/Booklet1.png").default},
{ src: require("@site/docs/3x3/Methods/img/3-Color/Booklet2.png").default},
{ src: require("@site/docs/3x3/Methods/img/3-Color/Booklet3.png").default}
]}
/>

Through August - October 2025, Christos posted another 3 videos.

<YouTube embedId="2FJcAtCcZug" />
<br/>
<YouTube embedId="GCk0cQBaABg" />
<br/>
<YouTube embedId="89868Dxg3bk" />

### Steps

1. Solve as a 3-Color cube on each face.
   1. Create two opposite oriented faces consisting of colors from either side.
   2. Form another two opposite faces consisting of opposite colors. Afterward, the remaining two faces will automatically contain opposite colors.
   3. Permute the corners, if necessary, to be half turn solvable.
2. Solve each opposite colored face.
   1. Solve a pair of opposite faces.
   2. Solve another pair of opposite faces.
   3. Solve the final pair of opposite faces.

## Credit

Thanks to Tadeáš Miler for suggesting the creation of this page and for providing the various websites by Feather and Christos.

[^feather-straughan-2025-1]: M. Feather and M. J. Straughan, "Personal Communication," 8 August 2025. [Online].
[^feather-straughan-2025-2]: M. Feather and M. J. Straughan, "Personal Communication," 16 August 2025. [Online].
[^feather-2016]: M. Feather, "How to Solve Rubik's Cube - A 3-Color Method," 19 September 2016. [Online]. Available: https://web.archive.org/web/20160916132454/http://www.irbsystems.com:80/test2/rc/.
[^miler-2015]: T. Miler, "Programmers wanted," SpeedSolving.com, 29 June 2015. [Online]. Available: https://www.speedsolving.com/threads/programmers-wanted.53140/page-2#post-1095551.
[^feather-2017]: M. Feather, "How to Solve Rubik's Cube - A 3-Color Method," 27 October 2017. [Online]. Available: https://web.archive.org/web/20171027001944/http://www.irbsystems.com/test2/rc/.
[^feather-2025]: M. Feather, "Unique Solving Method for Rubik's Cube," GitHub, 2025. [Online]. Available: https://mfeather1.github.io/3ColorCube/.
[^christos-2004]: G. Christos, "Rubic's cube My own method," 2004. [Online]. Available: https://web.archive.org/web/20040307094950/http://www.maths.curtin.edu.au:80/~christos/rubic.shtml.
[^christos-2009-1]: G. Christos, "'NEW' alternate illustrated solution to Rubik's cube puzzle," SpeedSolving.com, 25 February 2009. [Online]. Available: https://www.speedsolving.com/threads/new-alternate-illustrated-solution-to-rubiks-cube-puzzle.9909/.
[^christos-2009-2]: G. Christos, "'NEW' alternate illustrated solution to Rubik's cube puzzle," February 2009. [Online]. Available: https://web.archive.org/web/20110706123719/http://www.members.iinet.net.au/~justgeorgeous/solvingRubikscube.html.
[^christos-2009-3]: G. Christos, "'NEW' alternate illustrated solution to Rubik's cube puzzle," February 2009. [Online]. Available: https://web.archive.org/web/20090228055942/https://ubuyonline.com.au/rubik_cube.html.
[^christos-2009-4]: G. Christos, eBay, February 2009. [Online]. Available: http://shop.ebay.com.au/merchant/justgeorgeous.
[^christos-2009-5]: G. Christos, "solve Rubik Cube puzzle, solution, learn how to NEW quick easy METHOD," YouTube.com, 21 February 2009. [Online]. Available: https://www.youtube.com/watch?v=upub1rOvfqI.
[^christos-2009-6]: G. Christos, "NEW SOLUTION to Rubik's Cube. Fully illustrated step-by-step booklet by Dr George Christos," YouTube.com, 3 March 2009. [Online]. Available: https://www.youtube.com/watch?v=18_WoFQp8WQ.
[^christos-2016-1]: G. Christos, "New Solution to Rubik's Cube: step by step solution booklet. FREE!!," YouTube.com, 22 July 2016. [Online]. Available: https://www.youtube.com/watch?v=2t_EIyowSIY.
[^christos-2009-7]: G. Christos, "NEW solution to Rubik's cube," 2009. [Online]. Available: https://justgeorgeous.net/g%20christos%20soln%20rubics%20cube%203x3.pdf.
[^christos-2025]: G. Christos, Facebook, 18 January 2025. [Online]. Available: https://www.facebook.com/reel/1600959130532266.
[^christos-2016-2]: G. Christos, "Alternate Rubik Cube solution by Dr George Christos," Facebook, 19 July 2016. [Online]. Available: https://www.facebook.com/DrGeorgeChristos/.
