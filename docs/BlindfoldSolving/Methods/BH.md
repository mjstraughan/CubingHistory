---
description: History of the BH blindfold solving method for the Rubik's Cube.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# Beyer Hardwick

<ReconViewer
scramble="B U2 R' D2 L F2 D2 U2 L' B2 D2 R B' U F' U' F2 U' R F'"
solution={`D' B U B' D B U' B' . // UBR-LDB-BDR
U F U' B' U F' U' B . // UBR-LBU-FUR
F' D' B2 D F D' B2 D . // UBR-LUF-DLF
U R' F L2 F' R F L2 F' U' . // UBR-FRD-LUF
U2 L E' L' U2 L E L' . // UR-UL-RF
M2 D' R2 D M2 D' R2 D . // UR-UF-DB
U' B E2 B' U B E2 B' . // UR-UB-RF
F' U' B U S' U' B' U f . // UR-DR-BR
R' F2 R S2 R' F2 R S2 . // UR-DL-FL
R' F' R S R' F R S' . // UR-LU-DF
U M' U L U' M U L' U2 // UR-BL-FD`}
/>

## Description

**Creator:** [Daniel Beyer](CubingContributors/MethodDevelopers.md#beyer-daniel), [Chris Hardwick](CubingContributors/MethodDevelopers.md#hardwick-chris)

**Created:** 2009

**Steps:**

With UR and UBR as the buffer, solve pieces two at a time using move optimal 3-cycles.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=Beyer-Hardwick_Method)

## BH Development

In early 2008, Daniel Beyer and Chris Hardwick began mentioning the development of a new blindfold solving method [^1] [^2] [^3] [^4]. The idea was to take the freestyle 3-cycle solving that was growing in popularity and optimize the algorithms.

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Beyer1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick2.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Beyer2.png").default}
]}
/>

## BH Reveal

In 2008, Beyer added lists of algorithms to his website for solving the corners and edges [^5] [^6]. In March 2009, Hardwick posted a thread on SpeedSolving.com asking if there was interest in a complete website for the BH method [^7]. Seeing the large amount of interest from the forum members, Hardwick and Beyer began development on the website [^8]. A little over a month later, Hardwick posted the link to the page that covers the corner solving step of the method [^9]. This was soon followed by the edge solving page [^10]. Lucas Garron helped create links to applets for each case [^11].

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick3.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick4.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick5.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Hardwick6.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/BH/Garron.png").default}
]}
/>

[^1]: C. Hardwick, "Free Edges," SpeedSolving.com, 14 February 2008. [Online]. Available: https://www.speedsolving.com/threads/free-edges.2457/post-33964.

[^2]: D. Beyer, "R2, 3 cycle, or Pochmann for corners?," SpeedSolving.com, 22 February 2008. [Online]. Available: https://www.speedsolving.com/threads/r2-3-cycle-or-pochmann-for-corners.2958/post-35330.

[^3]: C. Hardwick, "R2, 3 cycle, or Pochmann for corners?," SpeedSolving.com, 23 February 2008. [Online]. Available: https://www.speedsolving.com/threads/r2-3-cycle-or-pochmann-for-corners.2958/post-35433.

[^4]: D. Beyer, "Commutators for r/l edges on big cubes," SpeedSolving.com, 21 June 2008. [Online]. Available: https://www.speedsolving.com/threads/commutators-for-r-l-edges-on-big-cubes.4727/post-60018.

[^5]: D. Beyer, "BH Corners," 2008. [Online]. Available: https://web.archive.org/web/20090129214146/http://dbeyer.110mb.com/BHcorners.txt.

[^6]: D. Beyer, "BH Edges," 2008. [Online]. Available: https://web.archive.org/web/20100421044200/http://dbeyer.110mb.com/BHedges.txt.

[^7]: C. Hardwick, "Interest in a BH method website?," SpeedSolving.com, 27 March 2009. [Online]. Available: https://www.speedsolving.com/threads/interest-in-a-bh-method-website.10756/.

[^8]: C. Hardwick, "Interest in a BH method website?," SpeedSolving.com, 30 March 2008. [Online]. Available: https://www.speedsolving.com/threads/interest-in-a-bh-method-website.10756/post-156409.

[^9]: C. Hardwick, "Interest in a BH method website?," SpeedSolving.com, 3 May 2009. [Online]. Available: https://www.speedsolving.com/threads/interest-in-a-bh-method-website.10756/post-174576.

[^10]: C. Hardwick, "Interest in a BH method website?," SpeedSolving.com, 12 May 2009. [Online]. Available: https://www.speedsolving.com/threads/interest-in-a-bh-method-website.10756/post-178458.

[^11]: C. Hardwick, "Interest in a BH method website?," SpeedSolving.com, 5 May 2009. [Online]. Available: https://www.speedsolving.com/threads/interest-in-a-bh-method-website.10756/post-175409.