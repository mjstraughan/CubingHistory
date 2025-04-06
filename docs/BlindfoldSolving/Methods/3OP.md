---
description: History of the 3OP blindfold solving method for the Rubik's Cube.
---

import AnimCube from "@site/src/components/AnimCube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# 3OP

<AnimCube params="config=../../ReconstructionConfig.txt&initmove=D' B' F R' F2 U F L2 D2 B' U2 R2 D' L2 F R' D' F U L' F U' R B2 U'&move={Scramble: D' B' F R' F2 U F L2 D2 B' U2 R2 D' L2 F R' D' F U L' F U' R B2 U'}{Orient corners: z' U' R' U R U' R' U - L' - U' R U R' U' R U - L - z x2 z' -U' R U R' U' R U R' - L' - U' R U R' U' R U R' - L' - U' R U R' U' R U R' - L2 - z x2}z'U'R'URU'R'UL'U'RUR'U'RULzx2z'U'RUR'U'RUR'L'U'RUR'U'RUR'L'U'RUR'U'RUR'L2zx2{Orient edges: x - d D r R d D r R d D r R - x' z' R - M U M U M U M U - R' z}x d D r R d D r R d D r R x' z' R M U M U M U M U R' z{UF -> BR -> DF: U' D z' R' U R' U' R' U' R' U R U R2 z D' U}U'Dz'-R'UR'U'R'U'R'URUR2-zD'U{UF -> DR -> DB: F2 x2 U' - R' U R' U' R' U' R' U R U R2 - U x2 F2}F2x2U'-R'UR'U'R'U'R'URUR2-Ux2F2{UF -> UR -> FL: L' U2 R2 U' R' U' R U R U R U' R U2 L}L'U2-R2U'R'U'RURURU'R-U2L{UF <-> FR, UL <-> BL: URUL-RLU2R'L'F'B'U2FB-L'U'R'U'}URULRLU2R'L'F'B'U2FBL'U'R'U'{UFL -> DFL -> UBL: D2 R2 U' R B' R F2 R' B R F2 R2 - U R2 D2}D2R2U'-RB'RF2R'BRF2R2-UR2D2{UFL -> UFR -> DBR: D B2 R B' R F2 R' B R F2 R2 B2 D'}DB2-RB'RF2R'BRF2R2-B2D'{UFL -> DFR -> UBR: D' R2 D2 B2 R B' R F2 R' B R F2 R2 B2 D2 R2 D}D'R2D2B2-RB'RF2R'BRF2R2-B2D2R2D" width="600px" height="400px" /> 
**Example solve from Shotaro Makisumi**

## Description

**Creator:** [Richard Carr](CubingContributors/MethodDevelopers.md#carr-richard), [Olly Hayden](CubingContributors/MethodDevelopers.md#hayden-olly)

**Created:** ~2002

**Steps:**

1. Orient corners and edges separately.
2. Permute corners and edges separately using three-cycles.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=3OP)

## Original Development (Richard Carr)

Around 2001 to 2002, Richard Carr developed a blindfold solving method that involved first separately orienting all corners and edges [1]. The corners are then permuted using simple one move setups in combination with a corner three cycle algorithm executed on the U layer. Carr’s method was placed on Jessica Fridrich’s website.

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Carr1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Carr2.png").default}
]}
/>

## Expanded Development (Olly Hayden)

In 2002, Olly Hayden presented a similar method on his website [2]. The method contains the same general steps as Carr’s method. The primary difference is in the permutation setup moves and algorithms. In Hayden’s development, pieces are moved to the U or D layer using the group `U, D, F2,B2, R2, L2`. After the setup moves, a permutation algorithm is used to cycle the corners, then the setup moves are undone. A complete guide with better algorithms was later developed by Shotaro Makisumi [3].

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Hayden.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Makisumi.png").default}
]}
/>

## Discussion Between Carr and Hayden

In August 2002, Carr and Hayden had a conversation comparing the difference in the permutation styles [4] [5] [6]. Carr stated that he had considered the way as described on Hayden’s site, but found it difficult.

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Carr3.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Hayden2.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/3OP/Carr4.png").default}
]}
/>

## Earlier Proposal (Jessica Fridrich)

On March 11, 1998, Jessica Fridrich responded to a question on the Cube Lovers mailing group in a discussion about whether solving the cube without looking is possible. Fridrich suggested that it may be possible to first orient all pieces, preserving their permutation, then permuting all pieces, preserving their orientation [7].

![](../img/BlindfoldSolvingOrigins/Fridrich.png)

## References

[1] R. Carr, "Blindfold cubing," 2002. [Online]. Available: http://www.ws.binghamton.edu/fridrich/Richard/BC.html.

[2] O. Hayden, "Blindfold Cubing," February 2002. [Online]. Available: https://web.archive.org/web/20020221054757/http://homepage.
ntlworld.com/angela.hayden/cube/blindfold_frontpage.html.

[3] S. Makisumi, "A 3-Cycle Guide to 3x3x3 Blindfold Cubing," 1 January 2008. [Online]. Available: https://www.cubefreak.net/bld/3op_guide.php.

[4] R. Carr, "Re: [Speed Solving Rubik's Cube] Blindfold," Speed Solving Rubik's Cube Yahoo Group, 16 August 2002. [Online].

[5] O. Hayden, "Re: [Speed Solving Rubik's Cube] Blindfold," Speed Solving Rubik's Cube Yahoo Group, 19 August 2002. [Online].

[6] R. Carr, "Re: [Speed Solving Rubik's Cube] Blindfold," Speed Solving Rubik's Cube Yahoo Group, 19 August 2002. [Online].

[7] J. Fridrich, "Re: Blindfold Cube-solving," Cube Lovers, 11 March 1998. [Online].
