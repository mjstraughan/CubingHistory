---
sidebar_position: 3
---

import YouTube from "@site/src/components/YouTube";

# Notation

## Outer Turns

The community standard outer turn notation was created by David Singmaster in 1979. In _Notes on Rubik's 'Magic Cube'_, Singmaster uses U, D, L, R, F, and B for outer turns [^singmaster-1981-1]. In an interview on TwistyPuzzles.com [^johnson-2002], Singmaster stated that he created the notation by combining his own ideas with the notation that was being used by John Conway, David Benson, and David Seal. Conway, Benson, and Seal used U, B, L, R, O, Y [^conway-benson-seal-1979], which corresponds with U, D, L, R, F, B. As mentioned by Singmaster in the interview, Conway had also been using a separate color-based notation prior to this one.

**Singmaster Interview:**
![](img/Notation/Singmaster.png)
**Conway, Benson, and Seal Notation**:
![](img/Notation/CBS1.png)
![](img/Notation/CBS2.png)

Singmaster’s outer turn notation also notated quarter turns and double turns. Initially, "-1" was used to denote a quarter turn [^singmaster-1981-1]. Based on feedback received from some readers, it was changed to an apostrophe. Double turns used a "2" as is still used.

## Slice Turns

The earliest known use of M, E, and S for slice notation can be found in the book _De Hongaarse Kubus!_ published by Frans Schiereck in July 1981 [^schiereck-1981-1] [^v-bruchem-2002]. In the book, Schiereck introduces the letters M, E, and S, which stand for “Midden” (Middle), “Equator” (Equator), and “Staande” (Standing). Anneke Treep and Marc Waterman also attributed the three letters to Schiereck. In the original Waterman booklet, Treep and Waterman wrote that they will “use the slice notation as first used by Frans Schiereck” [^waterman-treep-1987].

![](img/Notation/Schiereck2.jpg)
![](img/Notation/Schiereck1.jpg)
![](img/Notation/Bruchem.png)

Singmaster’s _Notes on Rubik’s ‘Magic Cube’_ also introduced a notation for slice turns [^singmaster-1981-2]. Singmaster’s idea was to append a lowercase “s” to an outer layer turn. For example, Rs is equal to R L’ and Rs’ is R’ L. The obvious difference with this notation is that it is outer turn based and the centers don’t move. For it to be equivalent to the use of the letter “M”, a cube rotation would need to be involved or assumed. Singmaster’s slice notation proposal is also mentioned in Schiereck’s book. This can be seen in the images above.

![](img/Notation/Singmaster2.png)

Throughout the years, many have questioned the direction that the M, E, and S notation follows. M moves the same direction as L, E with D, and S with F. It has been argued that slice turns should instead follow the U, R, and F layers. This confusion has led to theories as to the reasoning behind the decision. One common idea is that M, E, and S follow L, D, and F because the associated letters are closer in the alphabet. M is closer to L than it is to R, E is closer to D, and S is closer to F. This is an idea that has been mentioned several times since the formation of the online communities. At first it was noticed that M and E happen to be directly to the right of L and D in the alphabet [^barr-nd] [^barlow-2011]. Later it was noticed that S is closer to F than it is to B, completing the theory [^wang-2019] [^williams-2021] [^williams-xyzzy-2021].

![](img/Notation/Barr.png)
![](img/Notation/Barlow1.png)
![](img/Notation/Williams1.png)
![](img/Notation/Williams2.png)
<YouTube embedId="24eHm4ri8WM?start=51" />

> Thanks to xyzzy for pointing out the alphabetical order mention in this video.

Another theory is that the directions were chosen based on the easiest turns to perform on the older hardware [^trang-2024-1] [^trang-2024-2]. A turn of the M layer is the easiest, and M is possibly easier than M’, leading to M prevailing as the default letter not having the appended apostrophe. Then a clockwise rotation of the cube along the z axis leads to E becoming M and following the same directions as M. A clockwise rotation of the cube along the y axis turns S into M, again with S following the same directions as M.

![](img/Notation/Trang1.png)
![](img/Notation/Trang2.png)

These theories may only be coincidences and the truth may be much simpler. It is possible that Schiereck thought of words that could represent the three inner layers of the cube, used the first letter of each word for the notation, then assigned a direction based on natural ways of thinking or what felt obvious. M rotates downward, similar to writing or gravity pulling objects down. E moves from left to right, similar to reading left to right. S turns clockwise like a clock.

A major point against the alphabetical order theory is that Schiereck didn't use Singmaster notation. L R U D F B is instead L R B O V A in Schiereck's notation [^schiereck-1981-2]. Associating M E and S with L D and F would be confusing two different notations. Even if the alphabetical order theory is applied to L R B O V A, it breaks at the E layer since E is closer to B (U) than O (D). It could be imagined that the rotations portion of one of the previous theories may have come into play. However, _De Hongaarse Kubus!_ didn’t include x, y, and z for rotations. It includes a single letter, K, for rotations [^schiereck-1981-1]. K is a counter clockwise, not clockwise, rotation along the y axis to move the L layer to the front.

![](img/Notation/Schiereck3.png)

## Rotations

In 2001, Peter Jansen created a webpage containing algorithms for the CFOP method [^jansen-2002-1] [^jansen-2002-2]. On the page, Jansen stated "I adjusted many algorithms and added cube rotations to the standard notation". The notation of x, y, and z are the same as what is used today. In March or April of 2002, speedcubing.com updated its notation page to include x, y, and z notation [^speedsolving-com-nd-1] [^speedsolving-com-nd-2].

![](img/Notation/Rotations.png)

## Wide Turns

The earliest known publication of lowercase letters for wide turns is from Dave Orser in October 2002 [^orser-nd].

![](img/Notation/Wide1.png)

The use of appending a "w" to the end of an outer layer turn for wide turns originated in the Japanese community. This is according to Shotaro Makisumi who stated that it had been in use in the early 2000s [^makisumi-2007] [^makisumi-nd].

![](img/Notation/Wide2.png)
![](img/Notation/Wide3.png)

## Groups

In December, 2010, Michael James Straughan proposed combining outer, inner, and wide turn notation to describe groups of pieces or stickers [^straughan-2010]. In March, 2021, Straughan fully developed the notation and added it to a webpage [^straughan-2021-1] [^straughan-2021-2].

![](img/Notation/Groups1.png)
![](img/Notation/Groups2.png)

## Credit

Thanks to Ron van Bruchem for searching through the Frans Schiereck books that he owns. He was kind enough to confirm that the M, E, and S notation did appear in _De Hongaarse Kubus!_.

[^singmaster-1981-1]: D. Singmaster, "Notation," in Notes on Rubik's 'Magic Cube', Hillside, NJ, Enslow Publishers, 1981, p. 3.

[^johnson-2002]: W. Johnson, "INTERVIEW WITH DAVID SINGMASTER," TwistyPuzzles, 6 January 2002. [Online]. Available: https://twistypuzzles.com/articles/spotlight-singmaster/.

[^conway-benson-seal-1979]: J. H. Conway, D. Benson and D. Seal, in Solving the Hungarian Cube, Cambridge, UK, 1979, pp. 3, 6.

[^schiereck-1981-1]: F. Schiereck, De Hongaarse Kubus!, Mondria, 1981.

[^v-bruchem-2002]: R. v. Bruchem, "Re: Periodicity of algorithms," Yahoo! Groups - Speed Solving Rubik's Cube, 27 June 2002. [Online].

[^waterman-treep-1987]: M. Waterman and A. Treep, "Waterman Method," Cubsim For Fun, 1987. [Online]. Available: https://web.archive.org/web/20071029152943/http://rubikscube.info/waterman/booklet.php.

[^singmaster-1981-2]: D. Singmaster, in Notes on Rubik’s 'Magic Cube', Hillside, NJ, Enslow Publishers, 1981, p. 41.

[^barr-nd]: D. Barr, "Re: [Speed cubing group] Re: E - M - S etc.," Speed Solving Rubik's Cube, 18 10 2005. [Online].

[^barlow-2011]: T. Barlow, "How does an M-slice work?," SpeedSolving.com, 23 November 2011. [Online]. Available: https://www.speedsolving.com/threads/how-does-an-m-slice-work.33647/post-673462.

[^wang-2019]: D. Wang, "Rubik's Cube: How to Read Algorithms (Full Notation Guide)," YouTube, 20 4 2019. [Online]. Available: https://www.youtube.com/watch?v=24eHm4ri8WM&t=51s.

[^williams-2021]: J. Williams, "Idea to fix the cubing notation," SpeedSolving.com, 11 August 2021. [Online]. Available: https://www.speedsolving.com/threads/idea-to-fix-the-cubing-notation.85135/post-1450411.

[^williams-xyzzy-2021]: J. Williams and "xyzzy", "Slice Notation Makes Sense," SpeedSolving.com, 11 August 2021. [Online]. Available: https://www.speedsolving.com/threads/slice-notation-makes-sense.85144.

[^trang-2024-1]: V. Trang, Discord, 20 July 2024. [Online]. Available: https://discord.com/channels/885722463521103892/1259323911892504662/1264334899465420913.

[^trang-2024-2]: V. Trang, Discord, 27 September 2024. [Online]. Available: https://discord.com/channels/455707295205294081/472719097218465802/1289394045411528704.

[^schiereck-1981-2]: F. Schiereck, De Hongaarse Kubus voor Gevorderden, Hazerswoude-Dorp: Mondria, 1981.

[^jansen-2002-1]: P. Jansen, "SPEEDSOLVING RUBIK'S CUBE," Peter Jansen's Website, 2002. [Online]. Available: https://web.archive.org/web/20020112153806/http://home01.wxs.nl/~janse625/PetersCubePage.html.

[^jansen-2002-2]: P. Jansen, "SPEEDSOLVING RUBIK'S CUBE," SpeedCubing.com, 2002. [Online]. Available: https://www.speedcubing.com/peter.

[^speedsolving-com-nd-1]: "Overview of all moves on the cube, and their results," SpeedCubing.com, February 2002. [Online]. Available: https://web.archive.org/web/20020202155737/https://www.speedcubing.com/moves.html.

[^speedsolving-com-nd-2]: "Overview of all moves on the cube, and their results," SpeedCubing.com, April 2002. [Online]. Available: https://web.archive.org/web/20020405074048/https://www.speedcubing.com/moves.html.

[^orser-nd]: D. Orser, "Advanced tricks for F2L," SpeedCubing.com, 2002. [Online]. Available: https://web.archive.org/web/20021208035826fw_/http://www.speedcubing.com/f2l_advanced.html.

[^makisumi-2007]: S. Makisumi, "Re: Wide turns (was:New OLL for fridrich method)," Yahoo! Groups - Speed Solving Rubik's Cube, 1 February 2007. [Online].

[^makisumi-nd]: S. Makisumi, "Notation," Makisumi's Website, [Online]. Available: https://web.archive.org/web/20070915082213/http://www.cubefreak.net/notation.html.

[^straughan-2010]: M. J. Straughan, "Random Cubing Discussion," SpeedSolving.com, 1 December 2010. [Online]. Available: https://www.speedsolving.com/threads/random-cubing-discussion.22862/post-494718.

[^straughan-2021-1]: M. J. Straughan, "Notation Based Reference System (NBRS): A standard for defining methods and states," SpeedSolving.com, 4 March 2021. [Online]. Available: https://www.speedsolving.com/threads/notation-based-reference-system-nbrs-a-standard-for-defining-methods-and-states.79862/.

[^straughan-2021-2]: M. J. Straughan, "Notation Based Reference System," Google Sites, 2021. [Online]. Available: https://sites.google.com/site/athefre/concepts/nbrs?authuser=0.