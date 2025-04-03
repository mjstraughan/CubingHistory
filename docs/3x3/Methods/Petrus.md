---
description: History of the Petrus method for the Rubik's Cube
---

import AnimCube from "@site/src/components/AnimCube";
import ReactPlayer from 'react-player'
import ImageCollage from '@site/src/components/ImageCollage';

# Petrus

<AnimCube params="config=../../ExhibitConfig.txt&facelets=dldlyldldwwwwwwdlddbbdbbdlddlddggdggdddooooooddddrdddd" width="400px" height="400px" />

## Description

**Proposer:** [Lars Petrus](CubingContributors/MethodDevelopers.md#petrus-lars)

**Proposed:** 1981

**Steps:**

1. Build a 2x2x2 block.
2. Extend the 2x2x2 block to a 2x2x3 block.
3. Orient all remaining unsolved edges.
4. Complete the first two layers.
5. Solve the last layer.

[Petrus Website](https://lar5.com/cube/index.html)

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/Petrus_Method)

## Origin

### Development

In 1981 Lars Petrus obtained a Rubik’s Cube. Around the same time, he heard a rumor that a working solution hadn’t yet been found and that a prize of $1 million was being offered to the first person to demonstrate a solve. Petrus knew that others had been testing layer by layer as a method, and decided to try something different.

Petrus realized that a problem with the layer by layer methods was that once the first layer is solved, no other pieces can be solved without breaking up and restoring the first layer. He wanted to find a way to solve that avoids that sort of inefficiency. This naturally led to the idea of starting with a 2x2x2 block to keep the U, F, and R layers free to move. Extending to a 2x2x3 block and orienting the edges provides a further reduction to the use of the U and R layers. In order to truly solve the remainder of the cube using only U and R turns, the original steps were to permute the corners after the edge orientation step and before completing the first two layers, instead of after completing the first two layers. However, Petrus found that the recognition for the corner permutation step was too difficult during speed solves. It was decided to move the corner permutation step after completing the first two layers, reducing the number of corners needed to recognize.

The origins of the method were received from Petrus via private message [1]. The full response is below:

> It must have been around March 1981. The Cube Craze had started sweeping the world, and the students in my Physics Masters program in Uppsala were of course extra susceptible. Cubes were hard to find so when I heard a new shipment had arrived at the toy store, I rushed to buy one.
>
> It was very early days in cubing, and there was a rumor that no one had solved, and that there might even be a $1M prize for the first solver. Completely untrue, of course, but before the internet, there was no way to check.
>
> Since AFAIK no one had solved it, I wanted to avoid the layer by layer method that everyone tried. If that worked, it would surely already be solved! My first attempts also showed how clumsy that is, since you have to break that first layer to do anything.
>
> Having understood that, the natural question to me was: What can I build that doesn’t have to be broken up to move the rest of the pieces? Once you ask the question, the answers are simple: Solving a 2x2x2 block leaves 3 sides to turn freely, and a 2x2x3 block leaves 2 free sides.
>
> Side note: Gilles Roux many years later used the very similar idea that solving two 1x1x3 blocks leaves 1 free side and 1 free slice!
>
> The following may be a case of “the older I get, the better I was”, but as I remember it I had that idea figured out in 1-2 hours, I had built 2 full layers at the end of day 1, and I had a full thought out method I could solve with reliably in 10 minutes after about a week.
>
> At that point I nearly quit. The problem was solved, and there was clearly no $1M reward. But for some reason I just wanted to see how fast I could get. My times never stopped getting better for a year, and then there was a Swedish Championship to think of, and then the World Championship, and here we are.
>
> My initial method was different from my current method. Steps 1-3 were the same, but steps 4 and 5 were switched. In theory, you can position corners after step 3 in 3-4 moves on average, and I was always very focused on move count. But as I got faster, the time to recognize which corners to swap became too much of a problem, and I switched to the current method. It's possible some smart way could be created to do my old idea much better.
>
> After that my method improved mostly by me learning more LL algs, and recognizing what combination best solved each individual LL case. I guess the rest is known history.
>
> SIDE NOTE: One thing people are (IMHO) overly impressed by is how I could find/invent all those LL algs. It’s really simple: On a cube with 2 solved layers, move a corner/edge pair up to the top layer, move it around, and then put it back. Doing this, you will immediately discover Sune. Using 2 pairs, Niklas is obvious. Those 2 is how I did steps 5-7 at first (you can permute edges with two Sunes). If you keep playing around with this strategy, you’ll find a lot of simple LL algs.

Petrus has described the thought process behind the method during other instances in the past. Once in 1996 in the Cube Lovers mailing group and again on the Speed Solving Rubik’s Cube Yahoo! group [2, 3].

![](img/Petrus/Process1.png)
![](img/Petrus/Process2.png)

### Website

In March 1997, Petrus developed a website for the method [4].

![](img/Petrus/Website1.png)

Petrus later moved the website to a custom domain [5, 6].

![](img/Petrus/Website2.png)

## 1981 Swedish Championship

On September 23, 1981, a reporter from the daily Swedish newspaper Aftonbladet visited several people around the country who claimed to be able to quickly solve the cube [7]. The goal was to select a group of candidates for an upcoming solving championship. At the time, Petrus’ best solve time was 27 seconds. The reporter met with Petrus at a park and Petrus was given three attempts to solve the cube as quickly as possible. On the first attempt the cube fell apart, leading to a time of 49 seconds. The subsequent attempts were more successful at 35 and 39 seconds. The time of 35 seconds was the best out of the shortest times recorded up to that point by other hopeful competitors.

On November 2, 1981, the day before the competition, the final list of 11 contestants was published [8]. Out of the 11, Petrus was listed as having achieved the third fastest time. Three months earlier, Marko van Eekelen of the Netherlands had achieved a time of 35.48 seconds in a more official timing capacity. Guinness World Records was considering publishing Eekelen’s time as the world record, but decided to wait until after the Swedish Championship in case that record was broken.

The competition was held on November 3, 1981 and the results of the competition were published the next day [9, 10]. Petrus was announced as the champion, making the front page of the newspaper. Petrus achieved the best time at the competition of 40.48 seconds, also making it the Swedish national record.

Petrus described an interesting coincidence related to the main story on the front page of the newspaper [1]:

> I’m on the front page! If a Soviet submarine with nuclear weapons hadn’t crashed into the Swedish coast maybe I’d have topped it. Crazy story: A few days earlier I was invited as one of two guests on a current affairs TV show. The other guest was the Swedish foreign minister discussing the risk of war with Russia. I’m glad he did most of the talking…

<ImageCollage
images={[
{ src: require("@site/docs/3x3/Methods/img/Petrus/PXL_20250401_230619020.MP~2.jpg").default},
{ src: require("@site/docs/3x3/Methods/img/Petrus/PXL_20250401_230728194.MP~2.jpg").default},
{ src: require("@site/docs/3x3/Methods/img/Petrus/PXL_20250401_230953206.MP~2.jpg").default},
{ src: require("@site/docs/3x3/Methods/img/Petrus/PXL_20250401_230836471.MP~2.jpg").default}
]}
/>

## World Rubik's Cube Championship 1982

Lars Petrus used the method in the World Rubik's Cube Championship 1982 [11]. The final solve time was 24.57, ranking Petrus in fourth place.

![](img/Petrus/WRC1982.png)
![](img/Petrus/WRC1982-2.png)

This comes from the Cubic Circular newsletter where David Singmaster described the results and the methods that each competitor used. The description of Petrus' method is slightly different from how we know it today. Instead of only orienting the edges after the 2x2x3 block, it says that Petrus orients the edges then orients the corners before completing F2L and LL. After seeing the Petrus method page on Cubing History and the noting of this conflicting description, Petrus provided a simple explanation: This was likely a misunderstanding when Singmaster was writing the steps as Petrus explained them at the competition. Petrus had likely described the original corner permutation step that occurred after the edge orientation step, and Singmaster either mistakenly wrote “orient” or misunderstood the step.

> NOTE: This probably explains the “Singmaster misunderstanding” on https://www.cubinghistory.com/3x3/Methods/Petrus. I think I tried explaining this history during our brief chat, and it didn’t come across as intended.
> ~ Lars Petrus

## Edge Orientation Rotation

The method as taught by Petrus doesn't include a rotation for edge orientation [12].

![](img/Petrus/EORotation.png)

It seems that having the 2x2x3 block at db during the edge orientation process is a creation of the online community. The earliest known mention of rotating the cube to orient the edges comes from Johannes Laire in October 2006 [13, 14].

![](img/Petrus/Laire.png)
![](img/Petrus/Laire2.png)

Soon after the messages from Laire, others in the community were stating that they keep the 2x2x3 block at db during the edge orientation process [15].

![](img/Petrus/OtherEO.png)

## Morwen Thistlethwaite's 2x2x3 Method

In 1979 in David Singmaster's _Notes on Rubik's 'Magic Cube'_, Singmaster describes a method from Morwen Thistlethwaite [16]. It is stated that Thistlethwaite "involves first doing a 2x2x3 block...he then correctly orients all the remaining edges...then positions [the first two layer edges] and then puts [the first two layer corners] correctly in place. He then does the [U layer edges] and [U layer corners]..."

## References

[1] M. J. Straughan and L. Petrus, "Personal Communication," 21 March 2025. [Online].

[2] L. Petrus, "Re: Speed cubing," Cube Lovers, 10 June 1996. [Online]. Available: http://www.math.rwth-aachen.de/~Martin.Schoenert/Cube-Lovers/Lars_Petrus__Re__Speed_cubing.html.

[3] L. Petrus, "[Speed cubing group] Re: 4x4 thoughts....," Yahoo! Groups - Speed Solving Rubik's Cube, 1 August 2004. [Online].

[4] L. Petrus, Lars Petrus, March 1997. [Online]. Available: https://web.archive.org/web/19981201224552/http://u1.netgate.net/~mette/lars/cubedude/.

[5] L. Petrus, "[Speed Solving Rubik's Cube] Re: beginner needs some advice," Yahoo! Groups - Speed Solving Rubik's Cube, 5 April 2002. [Online].

[6] L. Petrus, Petrus Method, 2002. [Online]. Available: https://lar5.com/cube/index.html.

[7] K.-G. Bäck, "Lars, 20, slog nytt kubrekord: 35 sekunder!," Aftonbladet, 23 September 1981.

[8] B. Willborg, "Blir det ett nytt världsrekord?," Aftonbladet, 2 November 1981.

[9] "Lars, 21 förste svenske kubmästaren," Aftonbladet, 4 November 1981.

[10] B. Willborg, "Grattis Lasse, till det svenska kubrekordet!," Aftonbladet, 4 November 1981.

[11] D. Singmaster, Cubic Circular, 1982. [Online]. Available: https://www.jaapsch.net/puzzles/cubic3.htm.

[12] L. Petrus, "Step 3," Lars Petrus, [Online]. Available: https://lar5.com/cube/fas3_2.html.

[13] J. Laire, "Petrus method, and getting it fast," TwistyPuzzles.com, 26 October 2006. [Online]. Available: https://twistypuzzles.com/forum/viewtopic.php?p=40293#p40293.

[14] J. Laire, "Some videos," TwistyPuzzles.com, 5 April 2007. [Online]. Available: https://twistypuzzles.com/forum/viewtopic.php?p=54631#p54631.

[15] Various, "Petrus Method," TwistyPuzzles.com, 2007. [Online]. Available: https://twistypuzzles.com/forum/viewtopic.php?p=67431p67431.

[16] D. Singmaster, in Notes on Rubik’s 'Magic Cube', Hillside, NJ, Enslow Publishers, 1981, p. 32.
