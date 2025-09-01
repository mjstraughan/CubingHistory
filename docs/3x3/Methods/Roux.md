---
description: History of the Roux method for the Rubik's Cube.
---

import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# Roux

<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL FR DFR DR DBR BR UFR UFL UBL UBR"}}
/>

## Description

**Proposer:** [Gilles Roux](CubingContributors/MethodDevelopers.md#roux-gilles)

**Proposed:** 2003

**Steps:**

1. Build a 1x2x3 block on the left side.
2. Build a 1x2x3 block on the right side.
3. Solve the upper layer corners.
4. Solve the last six edges.

[Roux Website](http://grrroux.free.fr/method/Intro.html)

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/Roux_method)

## Development and Proposal

### Origin

When Gilles Roux started cubing again in 2001, he had been using a method that solved the edges of the last layer as the final step [^roux-2022]. Roux used algorithms consisting of M and U moves, which Roux found appealing due to the intuitive nature.

Eventually Roux switched to the Petrus method, again often having the opportunity to use edge permutation algorithms consisting of M and U moves. More specifically, Roux had been using the Petrus method along with OCLL and PLL as the last layer method. This is a combination that was called “Petrich” at the time. The Petrus method traditionally has a three step system of permuting the corners, then orienting the corners, then permuting the edges. CFOP, or Fridrich as the method was commonly called in the early 2000s, orients all pieces of the last layer then permutes all pieces. The edge permutation algorithms that Roux used consisted of M and U moves. Roux started thinking that he wanted a method that was mostly intuitive, but allowed for the opportunity to end with M and U moves.

Roux had realized that the process of building the first two layers in CFOP had some important strengths. So Roux started considering how the strengths of F2L could be combined with the desired finish of M and U moves. This naturally led to the idea of leaving out the middle slice of the F2L during the building process then solving the upper layer corners. The rest of the cube can then be solved using just M and U turns.

![](img/Roux/Origin.png)

> This is from a private conversation between Roux and I.

### Proposal

In August, 2003, Roux proposed the method to the community [^roux-2003] [^roux-nd].

![](img/Roux/Proposal1.png)
![](img/Roux/Proposal2.png)

### Last Six Edges Evolution

Originally a couple of LSE methods were provided [^roux-2004-1]. Roux eventually realized that his LSE strategy was the best and updated the site to only have his strategy [^roux-2005-1].

![](img/Roux/LSE1.png)
![](img/Roux/LSE2.png)

### CMLL Acronym

The acronym CMLL was proposed by Roux on the official website [^roux-2005-2]. However, it was later removed [^roux-2009].

![](img/Roux/CMLLAcronym.png)

### Gilles Roux's Speed Progression

An interesting fact is that Gilles Roux was once second in the world unofficially using his method. In the early days of the online community, an unofficial leaderboard on speedcubing.com had a high level of popularity [^bruchem-2005].

![](img/Roux/GillesRecord.png)

## Advancements and Techniques

### Misoriented Centers

The misoriented centers technique first appeared on Roux's site in 2004 [^roux-2004-2].

![](img/Roux/MisorientedCenters.png)

### Non-Matching Blocks and NMCMLL

#### NMCLL 1

Non-matching blocks and a recognition method for CMLL when the technique is used was first discussed publicly by Roux in December, 2004 [^roux-2004-3]. Roux created part of the table of cases [^roux-2004-4]. In October, 2006, Michael James Straughan completed the table [^straughan-2006] [^roux-2006].

The steps of this recognition method are:

1. Find the orientation of the left and right side stickers.
2. Find the stickers that should be on the upper layer.

![](img/Roux/NMCMLL1.png)
![](img/Roux/NMCMLL2.png)
![](img/Roux/NMCMLL3.png)
![](img/Roux/NMCMLL4.png)

#### Hyperorientations

This is a recognition method that works for normal and R2 pseudo blocks. It is more difficult for R or R’ style pseudo blocks because the U stickers of the right side corners are different, making it difficult to distinguish them from the same types of stickers that are on the left side corners. This recognition method was developed by Robert Smith in 2007 [^smith-2007].

Steps:

1. Find the orientation of the upper layer stickers.
2. Find the orientation of another set of stickers, either L and R or F and B, based on a pre-determined key sticker.

![](img/Roux/Hyperorientations2.png)

#### NMCLL 2

In April, 2010, Straughan developed a new recognition method [^straughan-2010-1] [^roux-2011]. This recognition method fixed the problem of the previous one, which was that finding the upper layer stickers is difficult when the non-matching block is one from a 90 degree turn away. Instead of searching for the upper layer stickers, four pre-determined positions are checked for a pattern.

Steps:

1. Find the orientation of the L and R layer stickers.
2. Check four pre-determined locations for a pattern.

![](img/Roux/NMCMLL5.png)
![](img/Roux/NMCMLL6.png)

#### ATCRM

Another recognition method for NMCMLL was developed by Straughan and Tim Mosher in December 2021 [^mark-2021] [^straughan-2021-1]. This recognition method is a refinement of the NMCLL 2 recognition method. Instead of checking four pre-determined positions for a pattern, only two positions need to be checked.

Steps:

1. Find the orientation of the L and R layer stickers.
2. Check two pre-determined locations for a pattern.

![](img/Roux/ATCRMRelease.png)
![](img/Roux/NMCMLL7.png)

#### Straughan

In 2024, Straughan developed a new style of recognition that is based on checking the minimum amount of required information [^straughan-2024-1] [^straughan-2024-2]. Just four total stickers are enough to determine a CMLL case. The locations of the two F stickers and the two R stickers form distinct configurations for each case. Other sets of four stickers can also be used.

![](img/Roux/Straughan.png)
![](img/Roux/Straughan2.png)

### Step 4c Recognition Methods

#### FUBU

The first 4c recognition method (FUBU) was developed by Straughan in April, 2010 [^barlow-2010-1] [^straughan-2010-2] [^straughan-2010-3]. While permuting the UL and UR edges, the stickers that will go to FU and BU after aligning the U layer are checked. Their relationship determines the 4c case. After the idea was sent to the community, Michał Ciebiada created a video describing the technique [^ciebiada-2010].

![](img/Roux/FUBU1.png)
![](img/Roux/FUBU2.png)
![](img/Roux/FUBU3.png)
![](img/Roux/FUBU4.png)

#### BU

Around the same time that FUBU was completely developed and presented in video form, others were using a recognition method that came to be called BU [^barlow-2010-1] [^miniGOINGS-2010]. While permuting the UL and UR edges, the sticker that should go to BU when the corners are aligned is checked against the centers. Various people had been using this around the same time that FUBU was described. The recognition became more well known with Alex Lau's use of it [^lau-2012-1].

![](img/Roux/BU1.png)
![](img/Roux/BU2.png)
![](img/Roux/BU3.png)

#### DFDB

In 2012, Straughan proposed a new 4c recognition method with a focus on providing easier look ahead [^straughan-2012-1]. A pair of stickers from the upper or bottom layer are tracked. This, combined with a center comparison, provides the information necessary to determine all 4c cases. Soon after the thread's creation, Bryan Rusinque recorded a video to visually show how the system works [^rusinque-2012].

![](img/Roux/DFDB.png)

<YouTube embedId="LKXdVfNaLao" />

After the proposal and development, the community named the system "DFDB" and added on a way to improve recognition for 4c 3-cycle cases that start with an M2 move. The first known to have improved the M2 start cases is Yuta Sasaki (佐々木雄太). In February 2013 Sasaki wrote a blog post detailing the original DFDB proposal by Straughan, while also describing a way to determine if a 3-cycle permutation will start with an M2 move [^sasaki-2013].

![](img/Roux/Sasaki.png)

<YouTube embedId="vW0bBDdoPlk" />

### CMLLEO

The idea of orienting the last six edges during CMLL had been discussed many times since the Roux method's inception. However, Thom Barlow was the first to heavily explore CMLLEO, starting around 2010. Originally, Barlow called the algorithm set KCLL [^barlow-2010-2], but later decided that it should be called CMLLEO [^barlow-2011].

![](img/Roux/CMLLEO.png)
![](img/Roux/CMLLEO2.png)

### Table Abuse

The community had long doubted the viability of the Roux method for use in one-handed solving due to the abundance of slice turns. Around 2010, Barlow discovered a one-handed slice turning technique that could be considered technically legal for competition use [^barlow-2010-3] [^barlow-2010-4]. The edge of the cube is rested on the table while the user turns the inner slice. This technique came to be known as "table abuse".

![](img/Roux/TableAbuse1.png)
![](img/Roux/TableAbuse2.png)

### EOLR

#### First Proposal and Development

EOLR was first proposed and developed by Straughan in August, 2012 [^straughan-2012-2]. EOLR is now split into two types. EOLR orients all edges and places the UL and UR edges on the bottom layer. EOLRb orients all edges and directly solves the UL and UR edges. Straughan's initial proposal was for both types. All of EOLR was developed, including all possible edge orientation angles. Straughan's version of EOLR intentionally left out the final M or M' move [^straughan-2013]. This allowed the user to determine if the UL and UR edges do need to be placed on the bottom layer or if there is the opportunity to directly solve the two edges with a final M or M' turn. Half of EOLRb was developed, with the expressed plan being to complete the other half [^straughan-2013].

![](img/Roux/EOLR1.png)
![](img/Roux/EOLR2.png)

#### Re-Development

EOLR, the edge orientation and placing the LR edges on the bottom layer version, was re-developed by Iuri Grangeiro with some assistance from Kian Mansour in August 2016 [^mansour-2016] [^grangeiro-2021]. Kian Mansour's use of EOLR helped popularize the technique.

![](img/Roux/EOLR3.png)
![](img/Roux/EOLR4.png)

### Pinkie Pie

The first known suggestion of the idea behind Pinkie Pie is by Rob Stuart in October, 2011 [^stuart-2011]. In 2012, Alexander Lau suggested the same idea and gave it the name Pinkie Pie [^lau-2012-2].

![](img/Roux/PinkiePie1.png)
![](img/Roux/PinkiePie2.png)

### ACMLL

ACMLL was proposed by Straughan in April, 2020 then developed and presented in January, 2021 [^straughan-2020] [^straughan-2021-2] [^straughan-2021-3]. The concept is to solve the two 1x2x3 blocks in pseudo configurations then correct the blocks during the CMLL algorithm.

![](img/Roux/ACMLL1.png)
![](img/Roux/ACMLL2.png)
![](img/Roux/ACMLL3.png)

### CMLL Prediction

#### Complete Prediction

In November, 2020, Zhouheng Sun suggested the idea that NMCMLL recognition may be well suited for predicting the CMLL case [^sun-2020]. The thought process is that because NMCMLL recognition has an easier second step when compared to U sticker first recognition, the more difficult first step of NMCMLL recognition can be recognized early during the final moves of the second block. With ATCRM having a second step involving checking just two stickers [^straughan-nd-1], compared to NMCMLL's four, Sun's thought process may apply even more. The previously described Straughan recognition has also been suggested to have potential to eliminate the CMLL recognition pause. With just four stickers total required for recognition, it has been suggested that Straughan recognition could be another possibility for predicting a CMLL case before arriving at the step or when one looking a solve [^straughan-2024-3].

![](img/Roux/CMLLPrediction1.png)
![](img/Roux/CMLLPrediction3.png)

#### Corner Orientation Prediction

In July, 2022, Straughan developed a corner orientation prediction system [^straughan-nd-2] [^straughan-2022-1] [^straughan-2022-2]. The stickers of the corners are tracked during the final pair of the second block. Recognizing the upper layer sticker orientation while solving the last pair helps to know the final orientation of the corners.

![](img/Roux/COPrediction1.png)
![](img/Roux/COPrediction2.png)

[^roux-2022]: M. J. Straughan and G. Roux, "Origin of the Roux method," Personal communication, 24 August 2022. [Online].

[^roux-2003]: G. Roux, "Another method," Yahoo! Groups - Speed Solving Rubik's Cube, 12 August 2003. [Online].

[^roux-nd]: G. Roux, Roux Method Website, [Online]. Available: https://web.archive.org/web/20040227193924/http://grrroux.free.fr/method/Step_1.html.

[^roux-2004-1]: G. Roux, "Step 4," Roux Method Website, 2004. [Online]. Available: https://web.archive.org/web/20040227193509/http://grrroux.free.fr/method/Step_4.html.

[^roux-2005-1]: G. Roux, "Step 4," Roux Method Website, 2005. [Online]. Available: https://web.archive.org/web/20051218084054/http://grrroux.free.fr:80/method/Step_4.html.

[^roux-2005-2]: G. Roux, "Step 3," Roux Method Website, 2005. [Online]. Available: https://web.archive.org/web/20051218084003/http://grrroux.free.fr/method/Step_3.html.

[^roux-2009]: G. Roux, "Step 3," Roux Method Website, 2009. [Online]. Available: https://web.archive.org/web/20090123084804/http://grrroux.free.fr/method/Step_3.html.

[^bruchem-2005]: R. v. Bruchem, "SpeedCubing.com News archive 2005," SpeedCubing.com, 2 August 2005. [Online]. Available: https://speedcubing.com/news_archive_2005.html.

[^roux-2004-2]: G. Roux, "Step 4," Roux Method Website, 2004. [Online]. Available: https://web.archive.org/web/20040906064311/http://grrroux.free.fr:80/method/Step_4.html.

[^roux-2004-3]: G. Roux, ""LL" corners," Yahoo! Groups - Speed Solving Rubik's Cube, 6 December 2004. [Online].

[^roux-2004-4]: G. Roux, "Step 3," Roux Method Website, 2004. [Online]. Available: https://web.archive.org/web/20041214140729/http://grrroux.free.fr:80/method/Step_3.html.

[^straughan-2006]: M. J. Straughan, "NMCMLL," Personal communication, 3 October 2006. [Online].

[^roux-2006]: G. Roux, "Step 3," Roux Method Website, 2006. [Online]. Available: http://grrroux.free.fr/method/Step_3.html.

[^smith-2007]: R. Smith, "Hyperorientation Recognition," 2007. [Online]. Available: https://web.archive.org/web/20140527061214/http://home.comcast.net/~quadricode/hyperorientations/.

[^straughan-2010-1]: M. J. Straughan, "I found a new way to recognize NMCMLL," Personal communication, 26 April 2010. [Online].

[^roux-2011]: G. Roux, "Step 3," Roux Method Website, 2011. [Online]. Available: https://web.archive.org/web/20111204185452/http://grrroux.free.fr/method/Step_3.html.

[^mark-2021]: JMark, Discord, 19 December 2021. [Online]. Available: https://discord.com/channels/913104731814105088/913129515541233734/922200195092066355.

[^straughan-2021-1]: M. J. Straughan, "ATCRM," Michael James Straughan's Website, 2021. [Online]. Available: https://sites.google.com/site/athefre/recognition/atcrm.

[^straughan-2024-1]: M. J. Straughan, Discord, 17 May 2024. [Online]. Available: https://discord.com/channels/885722463521103892/885722523013103667/1240932644334866442.

[^straughan-2024-2]: M. J. Straughan, "Straughan Recognition," 2024. [Online]. Available: https://sites.google.com/site/athefre/recognition/straughan-recognition?authuser=0.

[^barlow-2010-1]: T. Barlow, "Waffle's Roux Tutorial," SpeedSolving.com, 7 April 2010. [Online]. Available: https://www.speedsolving.com/threads/waffles-roux-tutorial.11506/post-357273.

[^straughan-2010-2]: M. J. Straughan, "Waffle's Roux Tutorial," SpeedSolving.com, 7 April 2010. [Online]. Available: https://www.speedsolving.com/threads/waffles-roux-tutorial.11506/post-357312.

[^straughan-2010-3]: M. J. Straughan, "Waffle's Roux Tutorial," SpeedSolving.com, 8 April 2010. [Online]. Available: https://www.speedsolving.com/threads/waffles-roux-tutorial.11506/post-357479.

[^ciebiada-2010]: M. Ciebiada, "Waffle's Roux Tutorial," SpeedSolving.com, 18 April 2010. [Online]. Available: https://www.speedsolving.com/threads/waffles-roux-tutorial.11506/page-39#post-364254.

[^miniGOINGS-2010]: miniGOINGS, "Waffle's Roux Tutorial," SpeedSolving.com, 8 April 2010. [Online]. Available: https://www.speedsolving.com/threads/waffles-roux-tutorial.11506/post-357896.

[^lau-2012-1]: A. Lau, "Roux 4b to 4c Transition," SpeedSolving.com, 11 February 2012. [Online]. Available: https://www.speedsolving.com/threads/roux-4b-to-4c-transition.35350/post-711618.

[^straughan-2012-1]: M. J. Straughan, "Roux 4b to 4c Transition," SpeedSolving.com, 11 February 2012. [Online]. Available: https://www.speedsolving.com/threads/roux-4b-to-4c-transition.35350/.

[^rusinque-2012]: B. Rusinque, "4b To 4c Transition," YouTube.com, 1 March 2012. [Online]. Available: https://www.youtube.com/watch?v=LKXdVfNaLao.

[^sasaki-2013]: Y. Sasaki, "LSE 先読みのコツ," kasokube.blog.shinobi.jp, 20 February 2013. [Online]. Available: https://kasocube.blog.shinobi.jp/Entry/190/.

[^barlow-2010-2]: T. Barlow, "KCLL," SpeedSolving.com, 16 May 2010. [Online]. Available: https://www.speedsolving.com/threads/kcll.21210/#post-381107.

[^barlow-2011]: T. Barlow, "Proposition - Let's fix some cubing terms!," SpeedSolving.com, 27 September 2011. [Online]. Available: https://www.speedsolving.com/threads/proposition-lets-fix-some-cubing-terms.32617/post-648278.

[^barlow-2010-3]: T. Barlow, "28.49 One Handed with Roux," SpeedSolving.com, 14 January 2010. [Online]. Available: https://www.speedsolving.com/threads/28-49-one-handed-with-roux.18549/.

[^barlow-2010-4]: T. Barlow, "OH Table Use," SpeedSolving.com, 11 May 2010. [Online]. Available: https://www.speedsolving.com/threads/oh-table-use.21118/.

[^straughan-2012-2]: M. J. Straughan, "Roux Misoriented Centers Table," SpeedSolving.com, 17 August 2012. [Online]. Available: https://web.archive.org/web/20200924235711/https://www.speedsolving.com/threads/roux-misoriented-centers-table.38176/.

[^straughan-2013]: M. J. Straughan, "Roux Misoriented Centers Table," SpeedSolving.com, 5 July 2013. [Online]. Available: https://www.speedsolving.com/threads/roux-misoriented-centers-table.38176/post-873153.

[^mansour-2016]: K. Mansour, "Accomplishment Thread," SpeedSolving.com, 13 August 2016. [Online]. Available: https://www.speedsolving.com/threads/accomplishment-thread.1688/post-1189069.

[^grangeiro-2021]: I. Grangeiro, Discord, 9 January 2021. [Online]. Available: https://discord.com/channels/416929203607568404/416929203607568406/797470923153735710.

[^stuart-2011]: R. Stuart, "Roux CFOP mix.," SpeedSolving.com, 19 October 2011. [Online]. Available: https://www.speedsolving.com/threads/roux-cfop-mix.33018/post-657165.

[^lau-2012-2]: A. Lau, "University of Leicester Open 2013," SpeedSolving.com, 12 November 2012. [Online]. Available: https://www.speedsolving.com/threads/university-of-leicester-open-2013.39237/post-798616.

[^straughan-2020]: M. J. Straughan, "The New Method / Substep / Concept Idea Thread," SpeedSolving.com, 17 April 2020. [Online]. Available: https://www.speedsolving.com/threads/the-new-method-substep-concept-idea-thread.40975/post-1363270.

[^straughan-2021-2]: M. J. Straughan, Discord, 3 January 2021. [Online]. Available: https://discord.com/channels/416929203607568404/416933073893195779/795317325355155497.

[^straughan-2021-3]: M. J. Straughan, "ACMLL: A new algorithm set for Roux," SpeedSolving.com, 18 March 2021. [Online]. Available: https://www.speedsolving.com/threads/acmll-a-new-algorithm-set-for-roux.79962/.

[^sun-2020]: Z. Sun, Discord, 12 November 2020. [Online]. Available: https://discord.com/channels/416929203607568404/416932528059056140/776534845492559922.

[^straughan-nd-1]: M. J. Straughan, "CMLL Prediction," Michael James Straughan's Development Website, [Online]. Available: https://sites.google.com/site/athefre/roux/cmll-prediction?authuser=0.

[^straughan-2024-3]: M. J. Straughan, Discord, 17 May 2024. [Online]. Available: https://discord.com/channels/416929203607568404/416929203607568406/1240938336735203428.

[^straughan-nd-2]: M. J. Straughan, "CMLL Prediction," Michael James Straughan's Development Website, [Online]. Available: https://sites.google.com/site/athefre/roux/cmll-prediction#h.2q1ipwkbr8j8.

[^straughan-2022-1]: M. J. Straughan, "CMLL Orientation Prediction," Google Sheets, July 2022. [Online]. Available: https://docs.google.com/spreadsheets/d/146FzKPkKbtBILeU4jSt5sFPYXj8U5ovNDzT8iGR3yK4/edit#gid=0.

[^straughan-2022-2]: M. J. Straughan, Discord, 24 July 2022. [Online]. Available: https://discord.com/channels/416929203607568404/416929203607568406/1000747989733752852.