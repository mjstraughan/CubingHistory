---
description: History of the 2GR method for Rubik's Cube.
---

import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import ImageCollage from '@site/src/components/ImageCollage';

# 2GR

<Exhibit
stickering={{
    solved: "U D F B L R DL DBL",
    orientedWithoutPermutation: "UL UF UR UB FL FR BL BR DF DR DB"
  }}
cameraLatitude={30}
cameraLongitude={-20}
/>

## Description

**Proposer:** [John Li](CubingContributors/MethodDevelopers.md#li-john-teoidus)

**Proposed:** 2017

**Steps:**

1. EOPair: Solve the pair at bDL while orienting all edges of the cube. The edges are oriented along the z axis.
2. Extend the pair to a 1x1x3 line at DL while permuting all remaining corners along the z axis. Afterward, the corners are solvable using turns of just the U and R layers.
3. Extend the 1x1x3 block to a 2x2x3 block at dl.
4. Complete the first two layers by solving the 1x2x3 block at dR.
5. Solve the last layer.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/2GR_Method)

## Proposal

In April, 2017 John Li proposed 2GR [^li-2017] [^li-nd-1].

![](img/2GR/Proposal1.png)
![](img/2GR/Proposal2.png)
![](img/2GR/Proposal3.png)

2GR was eventually moved to a new site [^li-nd-2].

![](img/2GR/NewSite.png)

[^li-2017]: J. Li, "2GR Method Text Tutorial," Reddit, 7 April 2017. [Online]. Available: https://www.reddit.com/r/Cubers/comments/63y9sy/2gr_method_text_tutorial/.
[^li-nd-1]: J. Li, "2GR (2-generator reduction)," [Online]. Available: https://web.archive.org/web/20170417185044/http://teoidus.github.io/dump/2GR/2GR.html.
[^li-nd-2]: J. Li, "2GR (2-generator reduction)," [Online]. Available: https://johnm.li/2GR/2GR.html.