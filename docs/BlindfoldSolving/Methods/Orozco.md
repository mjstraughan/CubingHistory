---
description: History of the Orozco blindfold solving method for the Rubik's Cube.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# Orozco

<ReconViewer
scramble="L R2 D' U B2 U2 F D' B2 F' L2 U2 F' D U' B D' U R D' U' F2 D' R D2"
solution={`R' U' R' D' R U R' D R2 . // URF-LUF-UBR
U' R D2 R' U R D2 R' . // URF-UBR-DLF
D' l U R' D2 R U' R' D2 x D . // URF-DFR-UBR
U L' U' L U L' U' R' U L U' L' U L U' R . // URF-UBR-BRU
D x D2 R' U' R D2 R' U l D' . // URF-DRB-UBR
R U R D R' U' R D' R2 . // URF-UBR-LBU
U' L U M' U' L' U M . // UF-LB-UB
M' U R' U' M U R U' . // UF-UB-BR
D' U R2 U' M' U R2 U' M D . // UF-BD-UB
M' U R2 U' M U R2 U' . // UF-UB-DR
R U R' U' M' U R U' r' . // UF-UR-UB
D U' R2 U M U' R2 U M' D' . // UF-UB-FD
U' L2 U M' U' L2 U M . // UF-LD-UB
U' R U M U' R' U M' . // UF-UB-RF
M U M U M U2 M' U M' U M' U2 . // UF + UB flip
r U R' U' M U R U' R' . // UF-UB-UR
L' U' L U M' U' L' U l . // UF-UL-UB
M' U' L' U M U' L U . // UF-UB-LF
y' L2 R' U2 R U2 R' F R U R' U' R' F' R2' U' L2 y // Parity`}
/>
**Example solve from Gabriel Alejandro Orozco Casillas**

## Description

**Creator:** [Gabriel Alejandro Orozco Casillas](CubingContributors/MethodDevelopers.md#orozco-casillas-gabriel-alejandro)

**Created:** 2013

**Steps:**

1. With UFR as the buffer and UBR as the helper, solve the corners using a set of 21 algorithms.
2. With UF as the buffer and UB as the helper, solve the edges using a set of 22 algorithms.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=Orozco_method)

## Origin

In June of 2012, Gabriel Alejandro Orozco Casillas posted a thread to SpeedSolving.com describing a blindfold corner solving method called D2 [^casillas-2012-1]. This was a translation of the R2 method to instead use D2 as the solving move. In December of the same year, he posted a thread presenting a variant of the method called “U2” [^casillas-2012-2]. The idea was to take the M2/R2 method and to instead use U2 for solving both the corners and the edges. 21 algorithms are used for the corners and 22 algorithms are used for the edges. The same method was again proposed in 2017 by Yuri Alexandrovich [^casillas-2013].

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/D2.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/U2.png").default}
]}
/>

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/Alexandrovich1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/Alexandrovich2.png").default}
]}
/>

## Development

On November 9, 2013, Gabriel Alejandro Orozco Casillas posted a video of a new blindfold solving method, which eventually became known as Orozco [^casillas-2013]. Elements of his previously proposed U2 method can be seen within Orozco, so it is possible that the idea of Orozco arose from the thought process behind the U2 method. It took some time before the Orozco method reached the non-Spanish speaking community. It is likely that the rest of the community first learned of the method through a thread by Jayden McNeill on SpeedSolving.com. In the thread, McNeill described the method, compared and contrasted it with the M2 method, and included an example solve [^mcneill-2018].

<YouTube embedId="qutNt4f5z8g" />

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/Orozco1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/Orozco/Orozco2.png").default}
]}
/>

![](../img/Orozco/McNeill.png)

## Credit

The original video of the method was provided in a private message by Gabriel Alejandro Orozco Casillas.

![](../img/Orozco/OrozcoChat.png)

[^casillas-2012-1]: G. A. O. Casillas, "D2 method," SpeedSolving.com, 17 June 2012. [Online]. Available: https://www.speedsolving.com/threads/d2-method.37354/.
[^casillas-2012-2]: G. A. O. Casillas, "U2 method for corners and edges," SpeedSolving.com, 31 December 2012. [Online]. Available: https://www.speedsolving.com/threads/u2-method-for-corners-and-edges.39840/.
[^casillas-2013]: G. A. O. Casillas, "Como armar el cubo rubik sin ver," YouTube, 9 November 2013. [Online]. Available: https://www.youtube.com/watch?v=qutNt4f5z8g.
[^mcneill-2018]: J. McNeill, "How the Orozco BLD method works," SpeedSolving.com, 2 April 2018. [Online]. Available: https://www.speedsolving.com/threads/how-the-orozco-bld-method-works.60487/.