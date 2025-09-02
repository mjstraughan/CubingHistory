---
description: History of the CFOP method for the Rubik's Cube.
---

import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import styles from "./CFOP.module.css";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# CFOP

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR DFR DFL DBL DBR FR FL BL BR",
    oriented: "UL UF UR UB UFR UFL UBL UBR "
}}
/>

## Description

**Proposer:** Various

**Proposed:** 1979 - 1981

**Steps:**

1. Cross: Solve the four bottom layer edges.
2. First Two Layers (F2L): Solve the four corner and edge pairs around the bottom two layers.
3. Orient the Last Layer (OLL): Orient all pieces of the upper layer.
4. Permute the Last Layer (PLL): Permute all pieces of the upper layer.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/CFOP_method)

## Cross

The first known publication of the cross step is Donald Taylor's _The Group of a Coloured Cube_ in 1978 [^taylor-1978].

![](img/CFOP/Cross/HelmTaylor.jpg)

> I contacted Georges Helm to ask the method steps in all of the books he owns from 1980 and earlier. This is a handwritten list of steps. "K" is for edges and "E" is for corners. The numbers on the left indicate the bottom, middle, and upper layer. "P" is for "position" and "O" is for "orient". Donald Taylor's publication is the earliest of the books he owns that describes a method starting with cross. However, it is likely that cross had been used even earlier.

## First Two Layers

### First Known Publication

The first known publication of the corner and edge pairing technique appeared in 1979 [^conway-benson-seal-1979-1] [^conway-benson-seal-1979-2]. John Conway, David Seal, and David Benson developed algorithms for all possible cases and published in two different publications.

**Solving the Hungarian Cube**

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS2.png").default}
]}
/>

To view a transcribed table of the F2L algorithms click below.

<details>
  <summary>Transcribed F2L Algorithms</summary>

<table border="1" className={styles.table}>
    <tr>
        <th rowspan="3">Corner</th>
        <th colspan="5">Edge</th>
    </tr>
    <tr>
        <th>FR</th>
        <th>FL</th>
        <th>BR</th>
        <th>BL</th>
        <th>FU</th>
    </tr>
    <tr>
        <th>RF</th>
        <th>LF</th>
        <th>RB</th>
        <th>LB</th>
        <th>UF</th>
    </tr>
    <tr  align="center">
        <td   rowspan="2"><strong>DFR</strong></td>
        <td>No move required</td>
        <td>F2 U2 F2 U2 F2</td>
        <td>R2 U2 R2 U2 R2</td>
        <td>F&#39; U&#39; F L U L&#39; R U R&#39;</td>
        <td>U R&#39; U&#39; R&#39; U&#39; F&#39; U F</td>
    </tr>
    <tr align="center">
        <td>R U&#39; R&#39; U F&#39; U2 F U2 F&#39; U F</td>
        <td>R F U&#39; F&#39; R&#39;</td>
        <td>F&#39; R&#39; U R F</td>
        <td>R U&#39; R&#39; F&#39; U L U&#39; L&#39; F</td>
        <td>U2 F&#39; U F U R U&#39; R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>RDF</strong></td>
        <td>R U2 B U&#39; B&#39; R&#39; U2 R U R&#39;</td>
        <td>L&#39; F&#39; U F L R U R&#39;</td>
        <td>F&#39; U&#39; B U2 B&#39; F</td>
        <td>F&#39; B&#39; L F&#39; L&#39; F U2 B F</td>
        <td>R U2 R&#39; F&#39; U2 F</td>
    </tr>
    <tr align="center">
        <td>F&#39; U2 L&#39; U&#39; L2 F&#39; L&#39; F2</td>
        <td>F U F2 U F R U R&#39;</td>
        <td>B U&#39; B&#39; F&#39; U F R U R&#39;</td>
        <td>B&#39; U&#39; B F&#39; U F R U R&#39;</td>
        <td>U F&#39; U F R U R&#39;</td>
    </tr>
    <tr  rowspan="2" align="center">
        <td  rowspan="2" align="center"><strong>FRD</strong></td>
        <td>F&#39; U2 L&#39; U L F U2 F&#39; U&#39; F</td>
        <td>R U L&#39; U2 L R&#39;</td>
        <td>B R U&#39; R&#39; B&#39; F&#39; U&#39; F</td>
        <td>R L B&#39; R B R&#39; U2 L&#39; R&#39;</td>
        <td>U2 R U&#39; R&#39; F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>R U2 B U B2 R B R2</td>
        <td>L&#39; U L R U&#39; R&#39; F&#39; U&#39; F</td>
        <td>R&#39; U&#39; R2 U&#39; R&#39; F&#39; U&#39; F</td>
        <td>L U L&#39; R U&#39; R&#39; F&#39; U&#39; F</td>
        <td>U&#39; F&#39; U2 F R U2 R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>DLF</strong></td>
        <td>L&#39; R U L U&#39; R&#39;</td>
        <td>F U2 F&#39; U F U2 F2 U&#39; F</td>
        <td>L&#39; R&#39; U R U2 L R U R&#39;</td>
        <td>L U2 L2 U&#39; L R U R&#39;</td>
        <td>U2 F U F&#39; U2 F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>F&#39; U&#39; F L&#39; U&#39; L R U R&#39;</td>
        <td>R F U2 F&#39; U R&#39;</td>
        <td>B U B&#39; L&#39; U&#39; L R U R&#39;</td>
        <td>B&#39; U B L&#39; U&#39; L R U R&#39;</td>
        <td>U&#39; L&#39; U&#39; L R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>FDL</strong></td>
        <td>F&#39; U F2 U2 F2 U F</td>
        <td>R F U&#39; F&#39; U2 R&#39; F&#39; U&#39; F</td>
        <td>B U&#39; B&#39; F U2 F2 U F</td>
        <td>B&#39; U&#39; B F U2 F2 U F</td>
        <td>U F U2 F2 U F</td>
    </tr>
    <tr align="center">
        <td>R U2 R&#39; F U2 F2 U F</td>
        <td>F U2 R U&#39; R&#39; F&#39; U R U R&#39;</td>
        <td>R&#39; U2 R F U2 F2 U F</td>
        <td>L U&#39; L&#39; U F U2 F2 U F</td>
        <td>U&#39; F U2 F&#39; U R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>LFD</strong></td>
        <td>R U L&#39; U&#39; L R&#39;</td>
        <td>L&#39; U L U F&#39; U&#39; F R U R&#39;</td>
        <td>R&#39; U R2 L&#39; U&#39; L R&#39;</td>
        <td>L U&#39; L2 R U&#39; L R&#39;</td>
        <td>U L&#39; U&#39; L F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>F U2 F2 U2 F R U R&#39;</td>
        <td>L&#39; U2 B&#39; U B L U F&#39; U&#39; F</td>
        <td>B U2 B&#39; R L&#39; U&#39; L R&#39;</td>
        <td>B&#39; U2 B R L&#39; U&#39; L R&#39;</td>
        <td>R L&#39; U&#39; L R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>DRB</strong></td>
        <td>B F&#39; U&#39; B&#39; U F</td>
        <td>B F U&#39; F&#39; U2 B&#39; F&#39; U&#39; F</td>
        <td>R&#39; U2 R U&#39; R&#39; U2 R2 U R&#39;</td>
        <td>B&#39; U2 B2 U B&#39; F&#39; U&#39; F</td>
        <td>B U B&#39; F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>R U R&#39; B U B&#39; F&#39; U&#39; F</td>
        <td>L&#39; U&#39; L B U B&#39; F&#39; U&#39; F</td>
        <td>F&#39; R&#39; U2 R U&#39; F</td>
        <td>L U&#39; L&#39; B U B&#39; F&#39; U&#39; F</td>
        <td>U R&#39; U&#39; R U2 R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>BDR</strong></td>
        <td>F&#39; U&#39; B U B&#39; F</td>
        <td>F U&#39; F2 B U B&#39; F</td>
        <td>B U&#39; B&#39; U&#39; R U R&#39; F&#39; U&#39; F</td>
        <td>B&#39; U B2 F&#39; U B&#39; F</td>
        <td>U&#39; F&#39; B U B&#39; F</td>
    </tr>
    <tr align="center">
        <td>R&#39; U2 R2 U2 R&#39; F&#39; U&#39; F</td>
        <td>L&#39; U2 L F&#39; B U B&#39; F</td>
        <td>B U2 L U&#39; L&#39; B&#39; U&#39; R U R&#39;</td>
        <td>L U2 L&#39; F&#39; B U B&#39; F</td>
        <td>U2 B U B&#39; R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>RBD</strong></td>
        <td>R U&#39; R2 U2 R2 U&#39; R&#39;</td>
        <td>L&#39; U L R&#39; U2 R2 U&#39; R&#39;</td>
        <td>F&#39; R&#39; U R U2 F R U R&#39;</td>
        <td>L U L&#39; R&#39; U2 R2 U&#39; R&#39;</td>
        <td>R&#39; U2 R U&#39; F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>F&#39; U2 F R&#39; U2 R2 U&#39; R&#39;</td>
        <td>F U2 F&#39; R&#39; U2 R2 U&#39; R&#39;</td>
        <td>F&#39; U2 F&#39; U F R U&#39; F&#39; U&#39; F</td>
        <td>B&#39; U B U&#39; R&#39; U2 R2 U&#39; R&#39;</td>
        <td>U2 R&#39; U2 R2 U&#39; R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>DBL</strong></td>
        <td>F&#39; U F L U2 L&#39; F&#39; U&#39; F</td>
        <td>F U F&#39; L U2 L&#39; F&#39; U&#39; F</td>
        <td>R&#39; U&#39; R B&#39; U2 B R U R&#39;</td>
        <td>L R U2 R&#39; L&#39;</td>
        <td>U L U2 L&#39; F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>R U2 R&#39; L U2 L&#39; F&#39; U&#39; F</td>
        <td>F U2 F&#39; B&#39; U2 B R U R&#39;</td>
        <td>R&#39; U2 R L U2 L&#39; F&#39; U&#39; F</td>
        <td>B&#39; U2 R&#39; U2 R2 U R&#39; B</td>
        <td>B2 B&#39; U2 B R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>LDB</strong></td>
        <td>F&#39; U2 L U2 L&#39; F</td>
        <td>L&#39; U&#39; L2 U2 L&#39; R U R&#39;</td>
        <td>R&#39; U R L U2 L&#39; R U R&#39;</td>
        <td>L U2 F U&#39; F&#39; L&#39; R U R&#39;</td>
        <td>U2 L U L&#39; F&#39; U F</td>
    </tr>
    <tr align="center">
        <td>R U&#39; R&#39; L U L&#39; F&#39; U F</td>
        <td>L&#39; U L2 U L&#39; F&#39; U F</td>
        <td>B U2 B&#39; L U2 L&#39; R U R&#39;</td>
        <td>L U&#39; L&#39; R U R&#39; F&#39; U&#39; F</td>
        <td>L U2 L&#39; R U R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>BLD</strong></td>
        <td>R U2 B&#39; U2 B R&#39;</td>
        <td>F U&#39; F&#39; B&#39; U2 B F&#39; U&#39; F</td>
        <td>B U B2 U2 B F&#39; U&#39; F</td>
        <td>B&#39; U2 R&#39; U R B F&#39; U&#39; F</td>
        <td>U&#39; B&#39; U2 B F&#39; U&#39; F</td>
    </tr>
    <tr align="center">
        <td>F&#39; U F B&#39; U&#39; B R U&#39; R&#39;</td>
        <td>L&#39; U2 L B&#39; U2 B F&#39; U&#39; F</td>
        <td>B U&#39; B2 U&#39; B R U&#39; R&#39;</td>
        <td>B&#39; U B F&#39; U&#39; F R U R&#39;</td>
        <td>U B&#39; U&#39; B R U&#39; R&#39;</td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>URF</strong></td>
        <td>U2 R F&#39; U B U&#39; B&#39; F R&#39;</td>
        <td>U F U&#39; F2 U F</td>
        <td>U&#39; R&#39; U R2 U&#39; R&#39;</td>
        <td>L2 U F U&#39; F2 U F U&#39; L2</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U&#39; F&#39; U2 F R U R&#39;</td>
        <td>U2 F&#39; U&#39; F2 U2 F&#39; R U R&#39;</td>
        <td>U2 R U R2 U2 R F&#39; U&#39; F</td>
        <td>U2 R B&#39; U B R&#39;</td>
        <td></td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>FUR</strong></td>
        <td>U&#39; F&#39; U2 L&#39; U2 L F</td>
        <td>U&#39; F U&#39; F&#39; U2 F&#39; U&#39; F</td>
        <td>U B U&#39; B&#39; F&#39; U&#39; F</td>
        <td>U B&#39; U&#39; B F&#39; U&#39; F</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U2 R U&#39; R&#39; U&#39; F&#39; U&#39; F</td>
        <td>L&#39; F&#39; U&#39; F L</td>
        <td>F&#39; U&#39; R&#39; U R F</td>
        <td>L F&#39; U&#39; F L&#39;</td>
        <td></td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>RFU</strong></td>
        <td>U R U2 B U2 B&#39; R&#39;</td>
        <td>U&#39; L&#39; U L R U R&#39;</td>
        <td>U R&#39; U R U2 R U R&#39;</td>
        <td>U&#39; L U L&#39; R U R&#39;</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U2 F&#39; U F U R U R&#39;</td>
        <td>R U F U&#39; F&#39; R&#39;</td>
        <td>B R U R&#39; B&#39;</td>
        <td>B&#39; R U R&#39; B</td>
        <td></td>
    </tr>
    <tr>
        <th rowspan="3">Corner</th>
        <th colspan="5">Edge</th>
    </tr>
    <tr>
        <th>FU</th>
        <th>LU</th>
        <th>BU</th>
        <th>RU</th>
        <th></th>
    </tr>
    <tr>
        <th>UF</th>
        <th>UL</th>
        <th>UB</th>
        <th>UR</th>
        <th></th>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>URF</strong></td>
        <td>F&#39; U2 F U F&#39; U&#39; F</td>
        <td>U&#39; F&#39; U2 F U&#39; F&#39; U F</td>
        <td>U2 F&#39; L F&#39; L&#39; F2</td>
        <td>U2 R U R U B&#39; U&#39; B&#39; R2</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U2 F&#39; U&#39; F&#39; U&#39; L&#39; U L F2</td>
        <td>U2 R B&#39; R B R2</td>
        <td>U R U2 R&#39; U R U&#39; R&#39;</td>
        <td>R U2 R&#39; U&#39; R U R&#39;</td>
        <td></td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>FUR</strong></td>
        <td>U F&#39; U F U&#39; F&#39; U&#39; F</td>
        <td>F&#39; U&#39; F</td>
        <td>R2 U B U&#39; B&#39; R2</td>
        <td>U&#39; R U2 R&#39; U F&#39; U&#39; F</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U&#39; F&#39; L&#39; U&#39; L F R U R&#39;</td>
        <td>U&#39; R U2 R&#39; U2 R U&#39; R&#39;</td>
        <td>F2 L&#39; U&#39; L U F2</td>
        <td>U R U&#39; R&#39;</td>
        <td></td>
    </tr>
    <tr align="center">
        <td  rowspan="2" align="center"><strong>RFU</strong></td>
        <td>U&#39; F&#39; U F</td>
        <td>R2 B U B&#39; U&#39; R2</td>
        <td>U F&#39; U2 F U2 F&#39; U F</td>
        <td>U R B U B&#39; R&#39; F&#39; U&#39; F</td>
        <td></td>
    </tr>
    <tr align="center">
        <td>U F&#39; U2 F U&#39; R U R&#39;</td>
        <td>F2 U&#39; L&#39; U L F2</td>
        <td>R U R&#39;</td>
        <td>U&#39; R U&#39; R&#39; U R U R&#39;</td>
        <td></td>
    </tr>
</table>

</details>
<br/>

**Solving the Hungarian Cube in Less Than 100 Moves**

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS5.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS6.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS7.png").default}
]}
/>

The notation used was slightly different from modern notation. Below is the notation as described in the publications.

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS3.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/CBS4.png").default}
]}
/>

The year of publication being 1979 can be deduced from a major point: In David Singmaster's Notes on Rubik's 'Magic Cube', it is stated "John Conway and Dave Benson have prepared an article for the Journal of Recreational Mathematics showing how to always restore the cube in at most 100 moves. They do bottom layer edges, then bottom corners and middle edges together and then use their tables to first position and then orient the top layer, in at most 13 and 19 moves respectively." [^singmaster-1981-1] This is on page 32 and is dated 30 November 1979 on page 34.

> I discovered those couple of sentences in Notes on Rubik's 'Magic Cube' then Georges Helm kindly helped me verify the Conway/Benson/Seal publications. I then noticed in their publications that they even had the complete F2L tables as shown above. I guess it was a very easy thing to overlook because it is such a quick mention in Notes on Rubik's 'Magic Cube'.

Other points that indicate the year of publication:

- The bibliography of Notes on Rubik's 'Magic Cube' states that the publication date for Solving the Hungarian Cube is "1980?" [^singmaster-1981-2]. So with the above quote saying that Conway, Benson, and Seal "prepared" the article, Singmaster's question of the date 1980 likely means that he was trying to convey something like "will be published in 1980?".
- Solving the Hungarian Cube in Less Than 100 Moves states on the second page "In fact we have now produced a proof using these methods that the cube can always be restored to its original position in at most 85 moves". [^conway-benson-seal-1979-2] In 1982's Winning Ways for Your Mathematical Plays Volume 2 in the Rubik's Hungarian Cube — Bűvös Kocka subchapter, it states "In the Extras you'll find lists of the shortest known words (improvements welcome!) to achieve any rearrangement, or any reorientation of the top layer. These are quoted from an algorithm due to Benson, Conway and Seal which guarantees to cure the cube in at most 85 moves" [^berlekamp-conway-guy-1982]. This is likely a reference to Solving the Hungarian Cube in Less Than 100 Moves. The bibliography of Notes on Rubik's 'Magic Cube' states for Winning Ways "This [is] said to be at the publishers and may appear in 1980...First draft, 16pp, 1979; Second draft, 15pp, 1980." [^singmaster-1981-2] The Winning Ways volumes were eventually published starting in 1982.
- With Solving the Hungarian Cube having likely been written or published in 1979 and Solving the Hungarian Cube in Less Than 100 Moves having an actual published first draft of 1979, that makes two publications in 1979 by Benson, Conway, and Seal that described the F2L pair technique along with cross and PLL then OLL.

### Later Publications

The second known publication of the corner and edge pairs technique comes in June 1981 on page 41 of James G. Nourse's _The Simple Solution to Rubik's Cube_ [^nourse-1981].

![](img/CFOP/F2L/Nourse.png)

> This one is only a mention of the idea with no strategies or sequences. I was provided this information by Joseph Briggs.

In July 1981 in the Slovenian magazine Teleks, the technique is described with some illustrations [^sosisic-sosisic-1981].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/Sosic1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/Sosic2.png").default}
]}
/>

There is video footage of Rok Sosič using the F2L pairing technique. This occurred during the Solvenian Nationals 1982, which was broadcast nationally on Slovenia's RTVSLO. Rok Sosič's solves can be seen starting around 1:49.

<div className='player-wrapper'>
<ReactPlayer
          className='react-player'
          playing controls url='/videos/Rubiks-Cube-Slovenia-1982.mp4'
          playing={false}
          width='100%'
          height='100%'
        />
</div>

> I was provided this information by Joseph Briggs who received it in a private message on speedsolving.com from someone by the name of Mitja. The user credited Rok Sosič as the creator of the F2L pairing technique.

In the September, 1981 issue of Cubism for Fun, the technique is described and credited to Rene Schoof [^treep-rossum-1981].

![](img/CFOP/F2L/Schoof.png)

> Thanks to Georges Helm and Ron van Bruchem for this information.

According to Ron van Bruchem, the technique appears two months later in December 1981 in a book by Frans Schiereck called De Hongaarse Kubus Voor Doordraaiers [^bruchem-2003] [^schiereck-1981-1].

![](img/CFOP/F2L/Schiereck1.png)
![](img/CFOP/F2L/Schiereck2.png)
In June 1984, a table of F2L pair solutions was published in Cubism For Fun by Guus Razoux Schultz [^schultz-1984].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/SchultzF2L1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/F2L/SchultzF2L2.png").default}
]}
/>

### Jessica Fridrich's Story

For several years in the online community, it was believed that the totality of CFOP had been created by Jessica Fridrich. However, some in the community were aware of the 1981 Cubism for Fun newsletter and the appearance of the F2L pair technique in the mentioned books. In July, 2003, Ryan Heise posed the question to the community as to the origin of the F2L pair technique [^heise-2003]. Jessica Fridrich responded by saying that she wasn't sure of the origin and that she learned of the technique from friends in college [^fridrich-2003-1]. They had been using the technique, although in a basic form. Fridrich found solutions for additional cases to speed up solving the first two layers.

![](img/CFOP/F2L/Fridrich1.png)

Before developing her website, Fridrich described the method on the Cube Lovers mailing list [^fridrich-1996-1].

![](img/CFOP/F2L/Fridrich2.png)

Fridrich developed the website for the method in January, 1997 [^fridrich-2007].

![](img/CFOP/F2L/Fridrich3.png)

## OLL and PLL

### Origin

OLL then PLL was independently developed starting in 1981 [^bruchem-2003] [^schultz-2022]. By Hans Dockhorn and Anneke Treep and also by Jessica Fridrich and Mirek Goljan.

![](img/CFOP/OLLPLL/Independent1.png)
![](img/CFOP/OLLPLL/Independent2.png)

> The first message is from the Speed Solving Rubik's Cube Yahoo group. The second is from a personal conversation that I had with Guus Razoux Schultz.

The algorithms were first published in 1981 in _De Hongaarse Kubus Voor Gevorderden_ by Dockhorn and Treep [^schiereck-1981-2]. They were published again in September 1988 in the 18th issue of Cubism For Fun [^treep-dockhorn-1988].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/SchiereckOLL.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/SchiereckPLL.png").default}
]}
/>

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/CFFOLLPLL1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/CFFOLLPLL2.png").default}
]}
/>

Jessica Fridrich published OLL and PLL algorithms in a 1982 issue of Mladý Svět [^fridrich-1996-2] [^fridrich-2007].

![](img/CFOP/OLLPLL/MladySvet.png)
![](img/CFOP/OLLPLL/MladySvet2.png)

Jessica Fridrich states on her website "Most of the algorithms were developed by myself during the time period between the summer 1981 and the spring of 1983. However, other speed cubists, most noticeably Mirek Goljan, have also significantly contributed with important moves." [^fridrich-2003-2]

Interestingly, the Conway, Benson, and Seal publications included all of the algorithms for PLL then OLL as the last layer method (not OLL then PLL) [^conway-benson-seal-1979-1] [^conway-benson-seal-1979-2].

**Solving the Hungarian Cube**

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/PLLOLL1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/PLLOLL2.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/PLLOLL3.png").default}
]}
/>

**Solving the Hungarian Cube in Less Than 100 Moves**

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/PLLOLL4.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/PLLOLL5.png").default}
]}
/>

### OLL Numbering System

The OLL numbering system was initially created by Jessica Fridrich [^fridrich-2003-3]. Fridrich had the cases numbered on her site. However, mirrors weren't included, as was common during those years.

![](img/CFOP/OLLPLL/OLLNumbers1.png)

The OLL numbers were expanded upon by the Japanese community to include mirror cases [^naitsu-nd] [^konishi-nd] [^makisumi-nd-1].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/OLLNumbers2.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/OLLNumbers3.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/OLLNumbers4.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/OLLPLL/OLLNumbers5.png").default}
]}
/>

> This comes from the site of someone by the name of Naitsu. This site was linked to by Konishi Katsuyuki, which was linked to by Makisumi Shotaro who states that "the numbers are the ones used by Japanese speedcubers."

### PLL Letter Names

The PLL letter names were created by Mirek Goljan and appear on Fridrich's site [^fridrich-2003-4]. As with OLL, mirrored cases weren't included. The system of adding a lower case a, b, c, or d after the uppercase letter was added later by the community.

![](img/CFOP/OLLPLL/PLLNames1.png)
![](img/CFOP/OLLPLL/PLLNames2.png)

## Techniques

### XCross and XXCross

XCross and XXCross were proposed by Chris Hardwick from 2003 - 2004 [^hardwick-2003] [^hardwick-2004].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/XCross1.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/XCross2.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/XCross3.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/XCross4.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/XCross5.png").default}
]}
/>

> These messages were posted to the Speed Solving Rubik's Cube group.

### Edge Control

The idea of edge control started appearing at the beginning of the online communities [^knights-2000] [^vandenbergh-2003].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/EdgeControl.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/EdgeControl2.png").default}
]}
/>

> The first message is from Dan Knights and the second is from Lars Vandenbergh. It is likely that early talks of ensuring that the LL edges are oriented is what led to the idea of ZBLS.

The earliest found mention of the term "edge control" is by Shotaro Makisumi starting in 2004 [^makisumi-2004] [^makisumi-2005]. Makisumi eventually created a page on his site to describe the technique.

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/EdgeControl3.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/EdgeControl4.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/EdgeControl5.png").default}
]}
/>

Chris Hardwick also had a page on speedcubing.com in 2005 about edge control [^hardwick-nd].

![](img/CFOP/Techniques/EdgeControl6.png)
![](img/CFOP/Techniques/EdgeControl7.png)

### Pseudo Slotting

Olly Hayden discussed the technique and called it non-matching pairs in May, 2002 [^hayden-2002] [^hayden-nd]. This is the earliest known mention of the technique.

![](img/CFOP/Techniques/PseudoSlotting.png)

It is described in the paragraph starting with "As stated above". This actually isn't the first discussion by Olly Hayden. It is only the first one remaining in the archived messages. The Speed Solving Rubik's Cube Yahoo! group was originally part of Yahoo! Clubs. In 2001, Yahoo! purchased eGroups, another mailing list company. They merged to become Yahoo! Groups. This change also deleted a year and a half worth of messages. The group was started in June of 2000 and any messages after August 5, 2000 and before March 27, 2002 were deleted. On their website, Olly points out they first talked about non-matching pairs in message 144 of the Yahoo! group. This would have been one of the deleted messages. It seems that the community became aware of Olly Hayden's messages and website. There are multiple instances on the Yahoo! group of others sharing the website.

Jessica Fridrich briefly mentioned the technique on her site on August 26, 2002 [^fridrich-2003-5].

![](img/CFOP/Techniques/PseudoSlotting2.png)

> Thanks to Filipe Teixeira for finding this on Fridrich's website.

That specific page was created after Olly Hayden's description and website [^fridrich-2002-1] [^fridrich-2002-2].

![](img/CFOP/Techniques/PseudoSlotting3.png)
![](img/CFOP/Techniques/PseudoSlotting4.png)

Pseudo slotting went through a few name changes over time. Olly Hayden called it non-matching pairs and that name is also used on Shotaro Makisumi's website [^makisumi-nd-2]. It was also called "mis-matched pairs" or "slant pairing" by some in the community [^li-2003] [^hardwick-2005].

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/PseudoSlotting5.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/PseudoSlotting6.png").default},
{ src: require("@site/docs/3x3/Methods/img/CFOP/Techniques/PseudoSlotting7.png").default}
]}
/>

### Free Slotting

Free slotting is the solving of a corner and edge pair with either its correct bottom layer corner or with a U layer corner correctly oriented with the U layer sticker facing the bottom layer. This allows for ending the solve with normal OLL algorithms then either PLL or TTLL.

Free slotting was proposed by Ryan Hudgens in October, 2019 on the SpeedSolving forum [^hudgens-2019].

![](img/CFOP/Techniques/FreeSlotting1.png)
![](img/CFOP/Techniques/FreeSlotting2.png)

## Popularization

As seen throughout the years, there have been many contributors to the basic steps of cross > first two layers > OLL > PLL. Each person played an important role in the chain of events that led to the community's use of the method that is now called CFOP. It is difficult to determine which of the original proposals and publications of the late 1970s and early 1980s were most influential. However, the popularity of the method, starting from the Rubik's Cube revival of the late 1990s, can be traced to a single source. Jessica Fridrich's development of a website showcasing the method and providing algorithms was instrumental in the adoption of an advanced solving method by many people in the community. This website came around six years before the 2003 World Rubik's Games Championship, the first official competition in over 20 years. This was opportune timing, aligning with the formation of the new online communities and allowing enough time for users of the method to practice in hopes of setting a new record. That is exactly what happened at the 2003 championships - Dan Knights and Jess Bonde, both using CFOP, set new world record singles and Knights broke the world record average.

In those early years of the online community the method was almost universally called "Fridrich", named after Jessica Fridrich as a credit to her website and algorithm development, as well as her promotion and confidence in the idea. Eventually the community decided to provide credit to all past contributors to the steps of the method by not focusing on a single person and using a step-based acronym - CFOP. There is of course logic and good intentions behind the change, considering that at each point along the timeline an individual contributor learned of a step from someone else and built upon the previous person's work. Conway, Benson, and Seal were aware of the simple layer by layer methods and built upon that with F2L pairing. Fridrich was aware of the F2L pairing technique through friends, then built upon it by adding new F2L algorithms as well as OLL and PLL. Building upon that, learners of CFOP have devised additional techniques that are now in use. But if a focus is placed on the pure question of popularization, Fridrich's promotion of the method allowed for the early adoption that has led to the method's popularity today. Without her website, it may have taken longer for the steps to be mentioned or promoted by other solvers of the 1980s, or to be rediscovered. This then means that the methods used and the times achieved at the 2003 championships may have been very different.

[^taylor-1978]: D. Taylor, in The Group of a Coloured Cube, New South Wales, Pure Mathematics, 1978.
[^conway-benson-seal-1979-1]: J. H. Conway, D. Benson and D. Seal, in Solving the Hungarian Cube, Cambridge, UK, 1979, p. 15.
[^conway-benson-seal-1979-2]: J. H. Conway, D. Benson and D. Seal, in Solving the Hungarian Cube in Less Than 100 Moves, Cambridge, UK, 1979, p. 2.
[^singmaster-1981-1]: D. Singmaster, in Notes on Rubik’s 'Magic Cube', Hillside, NJ, Enslow Publishers, 1981, p. 32.
[^singmaster-1981-2]: D. Singmaster, in Notes on Rubik’s 'Magic Cube', Hillside, NJ, Enslow Publishers, 1981, p. 65.
[^berlekamp-conway-guy-1982]: E. Berlekamp, J. H. Conway and R. Guy, in Winning Ways for Your Mathematical Plays Volume 2, New York, Academic Press, 1982, p. 767.
[^nourse-1981]: J. Nourse, in The Simple Solution to Rubik's Cube, Toronto, Bantam, 1981, p. 41.
[^sosisic-sosisic-1981]: R. Sosič and P. Sosič, "Article on Rubik’s Cube," Teleks, July 1981.
[^treep-rossum-1981]: A. Treep and J. v. Rossum, Cubism For Fun, September 1981.
[^bruchem-2003]: R. v. Bruchem, "Re: F2L system - where did it come from?," Yahoo! Groups - Speed Solving Rubik's Cube, 24 July 2003. [Online].
[^schiereck-1981-1]: F. Schiereck, De Hongaarse Kubus Voor Doordraaiers!, Mondria, 1981.
[^schultz-1984]: G. R. Schultz, Cubism For Fun, vol. 7, pp. 9-11, 1984.
[^heise-2003]: R. Heise, "F2L system - where did it come from?," Yahoo! Groups - Speed Solving Rubik's Cube, 23 July 2003. [Online].
[^fridrich-2003-1]: J. Fridrich, "Re: F2L system - where did it come from?," Yahoo! Groups - Speed Solving Rubik's Cube, 23 July 2003. [Online].
[^fridrich-1996-1]: J. Fridrich, Cube Lovers, 10 June 1996. [Online]. Available: http://www.math.rwth-aachen.de/homes/Martin.Schoenert/Cube-Lovers/[unknown_name]__Re__Methods_(Re__Speed_cubing).html.html.
[^fridrich-2007]: J. Fridrich, "20 years of speedcubing," [Online]. Available: http://www.ws.binghamton.edu/fridrich/history.html.
[^schultz-2022]: G. R. Schultz, "Origins of CFOP," Personal Communication, 22 August 2022. [Online].
[^schiereck-1981-2]: Frans Schiereck, De Hongaarse Kubus Voor Gevorderden, Mondria, 1981.
[^treep-dockhorn-1988]: A. Treep and H. Dockhorn, "The Dockhorn-Treep Production," Cubism For Fun, vol. 18, pp. 17-19, 1988.
[^fridrich-1996-2]: J. Fridrich, Cube Lovers, 24 June 1996. [Online]. Available: http://www.math.rwth-aachen.de/~Martin.Schoenert/Cube-Lovers/%5bunknown_name%5d__Re__Thistlethwaites_algorithm_(and_others).html.
[^fridrich-2003-2]: J. Fridrich, "My system for solving Rubik's cube," [Online]. Available: http://www.ws.binghamton.edu/fridrich/system.html.
[^fridrich-2003-3]: J. Fridrich, "Orienting The Last Layer," [Online]. Available: http://www.ws.binghamton.edu/fridrich/Mike/orient.html.
[^naitsu-nd]: Naitsu, "３段目のキューブの色を合わせる," [Online]. Available: https://web.archive.org/web/20040810081051/http://naitsu.hp.infoseek.co.jp/orient.htm.
[^konishi-nd]: K. Konishi, "ＯＬＬ～上面の色合わせ（向き合わせ）," [Online]. Available: https://web.archive.org/web/20040605045823fw_/http://www2.u-netsurf.ne.jp/~katsu-k/cubeoll.html.
[^makisumi-nd-1]: S. Makisumi, "Orientation of Last Layer (OLL)," [Online]. Available: https://web.archive.org/web/20040602231224/http://cubefreak.hp.infoseek.co.jp/OLL.html.
[^fridrich-2003-4]: J. Fridrich, "Permuting The Last Layer," [Online]. Available: http://www.ws.binghamton.edu/fridrich/Mike/permute.html.
[^hardwick-2003]: C. Hardwick, "New F2L method (sort of)," Yahoo! Groups - Speed Solving Rubik's Cube, 15 February 2003. [Online].
[^hardwick-2004]: C. Hardwick, "double extended cross," Yahoo! Groups - Speed Solving Rubik's Cube, 5 September 2004. [Online].
[^knights-2000]: D. Knights, "Re: Solving the first two layers," Yahoo! Groups - Speed Solving Rubik's Cube, 30 June 2000. [Online].
[^vandenbergh-2003]: L. Vandenbergh, "Some thoughts on learning the ZB system," Yahoo! Groups - Speed Solving Rubik's Cube, 27 October 2003. [Online].
[^makisumi-2004]: S. Makisumi, Yahoo! Groups - Speed Solving Rubik's Cube, 2 July 2004. [Online].
[^makisumi-2005]: S. Makisumi, "Re: Macky's New Average," Yahoo! Groups - Speed Solving Rubik's Cube, 13 April 2005. [Online].
[^hardwick-nd]: C. Hardwick, "The ZBF2L," [Online]. Available: https://web.archive.org/web/20050320040335/https://www.speedcubing.com/chris/zbf2l.html.
[^hayden-2002]: O. Hayden, "Re: Tactics on the F2L???," Yahoo! Groups - Speed Solving Rubik's Cube, 5 May 2002. [Online].
[^hayden-nd]: O. Hayden, "Non-matching pairs," [Online]. Available: https://web.archive.org/web/20021002082650/http://homepage.ntlworld.com/angela.hayden/cube/speed4.html.
[^fridrich-2003-5]: J. Fridrich, "First 2 Layers: Examples," [Online]. Available: http://www.ws.binghamton.edu/fridrich/examples.html.
[^fridrich-2002-1]: J. Fridrich, "Re: Looking ahead: a practice routine?," Yahoo! Groups - Speed Solving Rubik's Cube, 26 August 2002. [Online].
[^fridrich-2002-2]: J. Fridrich, "See how I solve the F2L," Yahoo! Groups - Speed Solving Rubik's Cube, 26 August 2002. [Online].
[^makisumi-nd-2]: S. Makisumi, "Cube Glossary," [Online]. Available: https://web.archive.org/web/20090131154731/http://cubefreak.net/other/glossary.html.
[^li-2003]: D. Li, "Re: Simple to get to 1 min," Yahoo! Groups - Speed Solving Rubik's Cube, 30 August 2003. [Online].
[^hardwick-2005]: C. Hardwick, "Re: Advanced F2L," Yahoo! Groups - Speed Solving Rubik's Cube, 26 September 2005. [Online].
[^hudgens-2019]: R. Hudgens, "Potential New 3x3 Technique: Free Slotting ( CFOP extension/cousin to psuedoslotting)," SpeedSolving.com, 25 October 2019. [Online]. Available: https://www.speedsolving.com/threads/potential-new-3x3-technique-free-slotting-cfop-extension-cousin-to-psuedoslotting.75559/.