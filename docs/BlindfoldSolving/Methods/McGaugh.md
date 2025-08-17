---
description: History of the McGaugh blindfold solving method for the Rubik's Cube.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# McGaugh

<ReconViewer
scramble="F' B' D2 F' D R D' U' L2 R' D L' B' L' B2 D2 L' B2 R' B' L B D' B R'"
solution={`d B M U M U M U2 M' U M' U M' U2 B' d' . // Orient FR
D' B2 M U M U M U2 M' U M' U M' U2 B2 D . // Orient DL
B' R' L D R' D' L' D R D' z R' D' L D R D' L' D z' R B . // Twist UBL
D R L U' F2 U F2 U L U' L2 D F2 D' F2 R' D' . // Twist DFL
R L D R' D' L' D R D' z R' D' L D R D' L' D z' R' . // Twist DFR
R2 L D R' D' L' D R D' z R' D' L D R D' L' D z' R2 . // Twist DBR
D' R2 L D R' D' L' D R D' z R' D' L D R D' L' D z' R2 D . // Twist DBL
D F2 R U R' U' R' F R2 U' R' U' R U R' F' F2 D' . // Permute DBL
D' F2 R U R' U' R' F R2 U' R' U' R U R' F' F2 D . // Permute DFR
F2 D' F2 R U R' U' R' F R2 U' R' U' R U R' F' F2 D F2 . // Permute UFL
 R U R' U' R' F R2 U' R' U' R U R' F'  . // DFL > UBR
F2 R U R' U' R' F R2 U' R' U' R U R' F' F2 . // Permute DFL
 R U R' U' R' F R2 U' R' U' R U R' F'  . // Permute UFR
R2 U' R2 R U R' U' R' F R2 U' R' U' R U R' F' R2 U R2 . // Permute UB
R2 U R2 R U R' U' R' F R2 U' R' U' R U R' F' R2 U' R2 . // Permute UF
 R U R' U' R' F R2 U' R' U' R U R' F'  . // Permute UL
L2 R U R' U' R' F R2 U' R' U' R U R' F' L2 . // Permute DL
D2 L2 R U R' U' R' F R2 U' R' U' R U R' F' L2 D2 . // Permute DR
d' L' R U R' U' R' F R2 U' R' U' R U R' F' L d . // Cycle Break
d' L R U R' U' R' F R2 U' R' U' R U R' F' L' d . // Permute FL
d' L' R U R' U' R' F R2 U' R' U' R U R' F' L d // Permute FR`}
/>
**Example solve from Bill McGaugh**

## Description

**Creator:** [Bill McGaugh](CubingContributors/MethodDevelopers.md#mcgaugh-bill)

**Created:** 2005

**Steps:**

Orient then permute edges and corners one piece at a time.

## Origin

McGaugh is a blindfold solving method that is closely related to the 3OP method. The primary difference is that the goal of McGaugh is to make blindfold solving as simple as possible. Four steps are followed: edge orientation, corner orientation, corner permutation, and edge permutation. Within each step, pieces are handled one at a time.

On August 26, 2005, Bill McGaugh completed development of a website for the method and presented it to the Speed Solving Rubik’s Cube Yahoo! group [^1]. In October of the same year, McGaugh mentioned the intent to advance the method by adding on 3-cycles as a way of solving [^2]. It is unknown whether this was ever developed.

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/McGaugh1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/McGaugh2.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/McGaugh3.png").default}
]}
/>

After its development, the McGaugh method did maintain at least a small amount of popularity. Some members of the SpeedSolving.com forum learned the method, and even the creator of the forum, Patrick Kelly, wrote a guide [^3] [^4].

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/Kelly1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/Kelly2.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/Popularity1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/McGaugh/Popularity2.png").default}
]}
/>

[^1]: B. McGaugh, "Bill McGaugh's Simplest System for Blindfold Cubing," 26 August 2005. [Online]. Available: https://web.archive.org/web/20060623081947/http://home.earthlink.net/~bmcgaugh/.

[^2]: B. McGaugh, "Re: [Speed cubing group] Blindfold solving," Speed Solving Rubik's Cube Yahoo! Group, 31 October 2005. [Online].

[^3]: P. Kelly, "What's The Easiest Blindfold System?," SpeedSolving.com, 28 February 2007. [Online]. Available: https://www.speedsolving.com/threads/whats-the-easiest-blindfold-system.654/post-5033.

[^4]: P. Kelly, "Blindfold Cubing Guide," 2007. [Online]. Available: https://pjkcubed.com/puzzles/blindfold-cubing-guide/.

[^5]: S. Pochmann, "Re: Blindfold cubing: Parity error," Speed Solving Rubik's Cube Yahoo Group, 7 March 2004. [Online].

[^6]: S. Pochmann, "Single algorithm 3x3 blindsolving," Stefan Pochmann, March 2004. [Online]. Available: https://www.stefan-pochmann.info/spocc/blindsolving/3x3_single_alg/old_index.php.

[^7]: S. Pochmann, "Key idea of my methods," SpeedSolving.com, 28 July 2008. [Online]. Available: https://www.speedsolving.com/threads/key-idea-of-my-methods.5427/.