---
description: History of the Nautilus method for the Face Turning Octahedron (FTO).
---

import TwistyPlayer from "@site/src/components/TwistyPlayer";
import YouTube from "@site/src/components/YouTube";

# Nautilus

<TwistyPlayer
 puzzle="fto"
 experimentalStickeringMaskOrbits="C4RNER:-III-I,CENTERS:-----III--III-----I--I--,EDGES:------------"
 controlPanel="none"
 cameraLatitude={35}
 cameraLongitude={0}
/>

## Description

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre), [Liam Highducheck](CubingContributors/MethodDevelopers.md#highducheck-liam), [Vincent Trang](CubingContributors/MethodDevelopers.md#trang-vincent-trangium)

**Proposed:** 2024

**Steps:**

1. Build a block on the left side at dBL.
2. Solve the remaining three large centers.
3. Solve the three remaining pieces of the first two layers.
4. Solve the last layer.

[Nautilus Website](https://sites.google.com/view/nautilusfto)

## Development

### Steps

Development of Nautilus began in June 2024 when Michael James Straughan showed interest in adapting the 3x3 Nautilus method to the FTO [^straughan-2024-1].

![](img/Nautilus/Straughan1.png)

After considering the best way to adapt Nautilus to the FTO, the initial steps became to solve a block on the left, finish the back two large centers, fill in the remainder of the first two layers, then solve the last layer [^straughan-2024-2].

![](img/Nautilus/Straughan2.png)

After discussion and further development of the method, it was decided to narrow down the steps to their current form [^straughan-highducheck-2024].
![](img/Nautilus/Straughan3.png)

### Last Layer

Various last layer strategies were proposed upon the initial release of the method [^straughan-2024-2]. Vincent Trang later suggested a few other last layer method ideas along with predicted move counts [^trang-2024]. It was ultimately decided to have center permutation then corner solving the two step process due to the low algorithm count and potentially better ergonomics.

![](img/Nautilus/Straughan4.png)
![](img/Nautilus/Trang1.png)

### Software

There weren’t many FTO image generators available at the time of the development of Nautilus. crystalcuber stepped in to assist the development team by created an image generator that is based on cubing.js [^xu-2024].

![](img/Nautilus/Xu1.png)
![](img/Nautilus/Xu2.png)

[^straughan-2024-1]: M. J. Straughan, 17 June 2024. [Online]. Available: https://discord.com/channels/885722463521103892/885722523013103667/1252286440289599551.
[^straughan-2024-2]: M. J. Straughan, "Introduction," July 2024. [Online]. Available: https://sites.google.com/view/nautilusfto.
[^straughan-highducheck-2024]: M. J. Straughan and L. Highducheck, 24 July 2024. [Online]. Available: https://discord.com/channels/885722463521103892/1259323911892504662/1265823831201808504.
[^trang-2024]: V. Trang, 19 July 2024. [Online]. Available: https://discord.com/channels/885722463521103892/1259323911892504662/1263727261153235099.
[^xu-2024]: E. Xu, "FTO Image Generator," 14 July 2024. [Online]. Available: https://discord.com/channels/885722463521103892/1259323911892504662/1265659206120509570.