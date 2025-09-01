---
description: History of the OLS step for Rubik's Cube.
---

import AnimCube from "@site/src/components/AnimCube";
import TwistyPlayer from "@site/src/components/TwistyPlayer";
import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import ImageCollage from '@site/src/components/ImageCollage';

# OLS

<Exhibit
stickering={{
    solved: "DFR FR",
    dim: "U D F B L R DF DL DB DR DFL DBL DBR FL BL BR",
    oriented: "UL UF UR UB UFR UFL UBL UBR",
  }}
/>

## Description

OLS is a collection of systems for orienting the last layer while solving the final corner and edge pair of the first two layers.

[Click here for the general OLS page on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/OLS)

## Vandenberg-Harris Last Slot

<div style={{ display: 'flex' }}>
<TwistyPlayer
alg="x2 R U R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
<TwistyPlayer
alg="x2 F' U' F"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
</div>
<div style={{ display: 'flex' }}>
<TwistyPlayer
alg="x2 R U' R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
<TwistyPlayer
alg="x2 F' U F"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
</div>

### Description

VHLS orients all edges of the last layer when the final F2L pair is already built on the last layer or when the pair is in the three turns away from solved state (R U R' or F' U' F).

### Origin

VHLS was proposed in October, 2003 on the Speed Solving Rubik's Cube Yahoo group by Lars Vandenberg and Dan Harris [^vandenbergh-harris-2003].

![](img/OLS/VHLS1.png)
![](img/OLS/VHLS2.png)

## Winter Variation

<TwistyPlayer
alg="x2 R U R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>

### Description

Winter Variation orients all last layer corners when the final F2L pair is in the pre-built state.

### Origin

Winter Variation was proposed in January, 2005 on the Speed Solving Rubik's Cube Yahoo group by Lucas Winter [^winter-2005].

![](img/OLS/WV.png)

## MGLS

<div style={{ display: 'flex' }}>
<Exhibit
  stickering={{
    solved: "FR",    
    dim: "U D F B L R DF DL DB DR DFL DBL DBR FL BL BR",
    oriented: "UL UF UR UB",
  }}
/>
<Exhibit
  stickering={{
    solved: "DFR",    
    dim: "U D F B L R DF DL DB DR DFL DBL DBR FR FL BL BR",
    oriented: "UL UF UR UB UFR UFL UBL UBR",
  }}
/>
</div>

### Description

MGLS consists of two steps. The first step, called ELS, orients the last layer edges while solving the final edge of the first two layers. The second step, called CLS, orients the last layer corners while placing the final corner of the first two layers.

### Origin

Shotaro Makisumi and Lucas Garron developed CLS from 2004 - 2007. See the [MGLS](3x3/Steps/MGLS.md) page for a detailed history.

## Erik Johnson Last Slot

<div style={{ display: 'flex' }}>
<TwistyPlayer
alg="x2 R U R' U2 R U' R' U R U R'"
experimentalStickeringMaskOrbits="EDGES:----IIII----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
<TwistyPlayer
alg="x2 R U' R' U' R U R' U2 R U' R'"
experimentalStickeringMaskOrbits="EDGES:----IIII----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>
</div>

### Description

EJLS orients the last layer corners when there is a single misoriented corner in the first two layers and the last layer edges are already oriented. It is similar to the "I" and "Im" subsets of CLS. However, the difference is that the goal is to take advantage of easy situations in blockbuilding in Petrus, ZZ, or even CFOP where a corner can be placed misoriented at any point and save moves versus correctly solving the corner.

### Origin

Erik Johnson proposed EJLS on speedsolving.com in September, 2008 [^johnson-2008-1] [^johnson-2008-2].

![](img/OLS/EJLS1.png)
![](img/OLS/EJLS2.png)

## Summer Variation

<TwistyPlayer
alg="x2 R U' R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----IIII,CENTERS:------"
controlPanel="none"
/>

### Description

Summer Variation orients the last layer corners when all edges are already oriented and the final F2L pair is in the three turns away from solved state (R U R').

### Origin

Chester Lian proposed the Summer Variation on speedsolving.com in January, 2009 [^lian-2009].

![](img/OLS/SV.png)

## Valk's Last Slot

<TwistyPlayer
alg="x2 R U R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----OOOO,CENTERS:------"
controlPanel="none"
/>

### Description

Valk's Last Slot (VLS) orients the last layer edges and corners when the final F2L pair is pre-built.

### Origin

In 2009, Mats Valk began incorporating algorithms that orient the last layer pieces when placing a built F2L pair [^hessler-valk-2013-1]. Valk had been using the algorithms in solves [^valk-2011] [^stuart-valk-2011] [^stuart-valk-2012], but didn't publish an algorithm list at the time.

![](img/OLS/VLS-HLS.png)
![](img/OLS/Valk1.png)
![](img/OLS/Valk2.png)
![](img/OLS/Valk3.png)

## Hessler's Last Slot

<TwistyPlayer
alg="x2 R U' R'"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----OOOO,CENTERS:------"
controlPanel="none"
/>

### Description

HLS orients the last layer pieces when the pair is R U R' away from solved.

### Origin

In 2013, Rowe Hessler had the same idea as Valk for VLS [^hessler-valk-2013-1]. Hessler developed the algorithms and called them RLS [^hessler-nd]. After publishing the algorithms, Valk contacted Hessler to describe how he had been using the idea and algorithms prior to Hessler's development. They decided to split the idea into two subsets - VLS when the pair is pre-built, and Hessler's Last Slot (HLS) when the pair is R U R' away from solved [^hessler-valk-2013-2].

## Magic Wondeful

<TwistyPlayer
alg="x2 R U R' U'"
experimentalStickeringMaskOrbits="EDGES:----?O?O----,CORNERS:----O???,CENTERS:------"
controlPanel="none"
/>

### Description

Magic Wondeful orients all last layer pieces when there is an oriented 1x2x2 block of pieces on the last layer and the final F2L pair is pre-built.

### Origin

David Gomes, Jeremy Fleischman, and Devin Corr-Robinett developed the idea in 2011 and it was presented on Shotaro Makisumi's website [^makisumi-2011] [^gomes-fleischman-corr-robinett-makisumi-2011] [^olson-nd].

![](img/OLS/MW1.png)
![](img/OLS/MW2.png)
![](img/OLS/MW3.png)

## Brooks Last Edge / Jack Johnston Last Slot

<TwistyPlayer
alg="x2 R' U' R' U' R U R U R"
experimentalStickeringMaskOrbits="EDGES:----OOOO----,CORNERS:----????,CENTERS:------"
controlPanel="none"
/>

### Description

BLE / JJLS orients all last layer corners during insertion of the final F2L edge. The prerequisite is that the corner of the final F2L pair is already solved, all edges are already oriented, and the edge of the F2L pair is currently in the last layer.

### Origin

#### Jack Johnston and Michael Gottlieb

Jack Johnston proposed the idea in August, 2013 and Michael Gottlieb developed the algorithms [^johnston-gottlieb-nd-1] [^johnston-gottlieb-nd-2] [^johnston-gottlieb-nd-3].

![](img/OLS/BLE-JJLS1.png)
![](img/OLS/BLE-JJLS2.png)
![](img/OLS/BLE-JJLS3.png)

After development, Johnston presented JJLS to the community in September, 2013 [^johnston-2013].

![](img/OLS/JJLS.png)

#### Anthony Brooks

In 2014, Anthony Brooks independently proposed and developed the first two layer edge placement and last layer corner orientation step of JJLS [^brooks-nd] [^johnston-2015].

![](img/OLS/BLE1.png)
![](img/OLS/BLE2.png)

[^vandenbergh-harris-2003]: L. Vandenbergh and D. Harris, "Some thoughts on learning the ZB system," Yahoo! Groups - Speed Solving Rubik's Cube, 27 October 2003. [Online].

[^winter-2005]: L. Winter, "A variation on the Petrus Method.," Yahoo! Groups - Speed Solving Rubik's Cube, 27 January 2005. [Online].

[^johnson-2008-1]: E. Johnson, "Secret Petrus technique REVEALED," SpeedSolving.com, 8 September 2008. [Online]. Available: https://www.speedsolving.com/threads/secret-petrus-technique-revealed.6276/.

[^johnson-2008-2]: E. Johnson, "Secret Petrus technique REVEALED," SpeedSolving.com, 9 September 2008. [Online]. Available: https://www.speedsolving.com/threads/secret-petrus-technique-revealed.6276/post-84523.

[^lian-2009]: C. Lian, "COLS/"Summer Variation"/set of algs without a name," SpeedSolving.com, 19 January 2009. [Online]. Available: https://www.speedsolving.com/threads/cols-summer-variation-set-of-algs-without-a-name.8820/.

[^hessler-valk-2013-1]: R. Hessler, "OLS (VLS + HLS) Algorithms: by Mats Valk and Rowe Hessler," SpeedSolving.com, 30 October 2013. [Online]. Available: https://www.speedsolving.com/threads/ols-vls-hls-algorithms-by-mats-valk-and-rowe-hessler.44642/.

[^valk-2011]: M. Valk, "Mats Valk 3x3 9.43 avg and 6.41 single!," SpeedSolving.com, 30 October 2011. [Online]. Available: https://www.speedsolving.com/threads/mats-valk-3x3-9-43-avg-and-6-41-single.33243/post-662179.

[^stuart-valk-2011]: R. Stuart and M. Valk, "Mats Valk 3x3 9.43 avg and 6.41 single!," SpeedSolving.com, 31 October 2011. [Online]. Available: https://www.speedsolving.com/threads/mats-valk-3x3-9-43-avg-and-6-41-single.33243/post-662386.

[^stuart-valk-2012]: R. Stuart and M. Valk, "Mats Valk 3x3 average: 7.77," SpeedSolving.com, 17 September 2012. [Online]. Available: https://www.speedsolving.com/threads/mats-valk-3x3-average-7-77.38613/post-782931.

[^hessler-nd]: R. Hessler, "RLS," Hessler's Website, 2013. [Online]. Available: https://rowe.cubing.net/rls/.

[^hessler-valk-2013-2]: R. Hessler and M. Valk, "Introduction," YouTube, 30 October 2013. [Online]. Available: https://www.youtube.com/watch?v=dDLv3duiu5o.

[^makisumi-2011]: S. Makisumi, "Introducing Magic Wondeful," SpeedSolving.com, 20 May 2011. [Online]. Available: https://www.speedsolving.com/threads/introducing-magic-wondeful.29464/.

[^gomes-fleischman-corr-robinett-makisumi-2011]: D. Gomes, J. Fleischman, D. Corr-Robinett and S. Makisumi, "Magic Wondeful," Makisumi's Website, 20 May 2011. [Online]. Available: http://cubefreak.net/speed/advancedf2l/mw.php.

[^olson-nd]: C. Olson, "Magic Wondeful," Olson's Website, [Online]. Available: http://www.cyotheking.com/magic-wondeful/.

[^johnston-gottlieb-nd-1]: J. Johnston and M. Gottlieb, "JJLS," Johnston's Website, [Online]. Available: https://web.archive.org/web/20130919142035/https://johnstoncubing.webs.com/jjls.htm.

[^johnston-gottlieb-nd-2]: J. Johnston and M. Gottlieb, "STEP 1: F2L CORNER + EO," Johnston's Website, [Online]. Available: https://web.archive.org/web/20131209052835/https://johnstoncubing.webs.com/jjlsstep1f2lcornereo.htm.

[^johnston-gottlieb-nd-3]: J. Johnston and M. Gottlieb, "STEP 2: F2L EDGE + CO," Johnston's Website, [Online]. Available: https://web.archive.org/web/20210119190659/https://johnstoncubing.webs.com/jjlsstep2f2ledgeco.htm.

[^johnston-2013]: J. Johnston, "New(?) LS + LL Approach," SpeedSolving.com, 4 September 2013. [Online]. Available: https://www.speedsolving.com/threads/new-ls-ll-approach.43862/.

[^brooks-nd]: A. Brooks, "Brooks Last Edge (BLE)," Brooks' Website, [Online]. Available: https://web.archive.org/web/20140913231837/http://www.brookscubing.com/ble-brooks-last-edge.html.

[^johnston-2015]: J. Johnston, "2-look LS+LL combinations," SpeedSolving.com, 11 August 2015. [Online]. Available: https://www.speedsolving.com/threads/2-look-ls-ll-combinations.36468/post-1108339.