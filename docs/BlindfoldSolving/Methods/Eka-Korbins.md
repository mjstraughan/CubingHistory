---
description: History of the Eka-Korbins blindfold solving method for the Rubik's Cube.
---

import ReconViewer from "@site/src/components/ReconViewer";
import YouTube from "@site/src/components/YouTube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# Eka-Korbins

<ReconViewer
scramble="B2 L' D2 L2 D2 U' L' R D L D L D F2 R' D U"
solution={`R' F l' D2 R U R' D2 R U' x' F' R . // UBL-UBR-FLU
R U2 R' D R U2 R' D' . // UBL-FRD-LFD
D' x D2 L U2 L' D2 L U2 r' D . // UBL-RBD-DBL
F x D L U2 L' D' L U2 r' F' // UBL-FUR-RUB`}
/>
**Example solve from Erik Youri** [^1]

## Description

**Creator:** [Dmitry Karyakin](CubingContributors/MethodDevelopers.md#karyakin-dmitry), [Oleg Gritsenko](CubingContributors/MethodDevelopers.md#gritsenko-oleg)

**Created:** 2011

**Steps:**

With ULB as the buffer, solve corners using 3-cycles after setting up the first target corner into the DFR position in any orientation.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php?title=Eka)

## Development

The Eka-Korbins method was originally developed by Dmitry Karyakin in September 2011 and was named Eka after Karyakin’s username - ekaerovets [^2]. The method was posted on the Russian site speedcubing.ru. This original post included an algorithm set for FRD. In October 2011, Oleg Gritsenko developed the algorithms for DFR and RDF, completing the set [^3]. It was decided to incorporate Gritsenko’s username Dr.Korbin into the method name to create the Eka-Korbins method.

<ImageCollage
images={[
{ src: require("@site/docs/BlindfoldSolving/img/Eka-Korbins/Proposal1.png").default},
{ src: require("@site/docs/BlindfoldSolving/img/Eka-Korbins/Proposal2.png").default}
]}
/>

[^1]: Youri, "méthode eka-corners 1," 28 May 2017. [Online]. Available: https://twistypuzzles-ru.translate.goog/forum/index.php?topic=994.0&_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr.

[^2]: D. Karyakin, "eka-cornesr 1," 23 September 2011. [Online]. Available: https://speedcubing.ru/forum/index.php?topic=53.0.

[^3]: O. Gritsenko, "eka-korbins," 26 October 2011. [Online]. Available: https://speedcubing.ru/forum/index.php?topic=281.0.