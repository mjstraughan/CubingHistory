---
sidebar_class_name: hidden
---

# Title: Solving permutation and orientation at the same time with 3-cycles (ideas)

## Post #1 by 彳亍 (2006-3-18 19:02:47)

I've figured out how to solve two pieces (orientation + permutation) at once. Corners and edges are all solved with 3-cycles, using at most two setup moves (including double-layer moves). Some situations may require a parity adjustment step.

After a preliminary estimate, the average solve movecount is within 120 moves. However, the trade-off is that about 60 to 70 more algorithms are needed.

Compared to my original method, this is more than twice as efficient, but the difficulty of judgment during the solving process is higher. I hope it has potential for development :\)

The next step is to choose a set of algorithms. It would be ideal if the number could be reduced by half. Cubers who know Stefan's method may understand this method better. Let's look at a few OLL and PLL examples.

## Post #2 by 彳亍 (2006-3-18 19:10:51)

For edges, I still use the old method, where UR (52) is the starting point. (123456 refers to the six faces FRBLUD respectively)

Using OLL algorithms:

`L' R B R' L U2 L' R B R' L` solves 15-54

`(R U R' U' r) (R' U R U') r'` solves 53-15

Using PLL algorithms:

`L2 U L U L' U' L' U' L' U L'`
`F2 U' R' L F2 R L' U' F2`
`R2 U' F B' R2 F' B U' R2`

A few other easy-to-remember algorithms:

`(R U)3 (R' U')2 U2` solves 12-51
`(U R)3 (U' R')2 R2` solves 53-32

`L' F B' U2 F' B L'` solves 34-14

I initially considered using UR-UB-UL, UR-UB-UF, UR-UF-UL (counting the orientations of edges and both clockwise/counterclockwise cycles, that's 24 algorithms, sigh) all other pieces are moved to the top side in these positions to be solved. But clearly this isn't the most optimal way. In most cases, 3-cycles where the pieces are not on the same side have the lowest movecounts.

_[This post was edited by the author on 2006-9-8 17:31:20]_

## Post #3 by 彳亍 (2006-3-18 19:11:25)

Corner pieces

OLL algorithms:
`B' R' F' R B R' F R` solves 23-12
`R' F' R B' R' F R B` solves 12-23
`R2 D' R U2 R' D R U2 R` solves 25-35

PLL algorithms:

`(l' U R') D2 (R U' R') D2 R2`
`(l U' R) D2 (R' U R) D2 R2`

In addition, Cube Explorer 3.67 was used to solve all combinations of the cycles UFR-UBL-UBR and UFR-UBL-UFD, in 8-10 moves. Solving eight corners takes three cycles plus a correction, averaging 40 to 50 moves.

_[This post was edited by the author on 2006-3-18 20:03:49]_

## Post #4 by 彳亍 (2006-3-18 19:34:42)

I used Cube Explorer to generate a lot of algorithms, and noticed that most 3-cycles are around 8 moves. Many of them are what foreigners call "commutators", for example:

`F' L B2 L' F L B2 L'`

A few other cases may need 9-12 moves, they can be derived from this basis, for example

`U F' L B2 L' F L B2 L' U'` (Conjugates).

So in terms of total movecount, this method is quite advantageous.

_[This post was edited by the author on 2006-3-18 20:12:25]_

## Post #5 by 彳亍 (2006-3-18 19:36:56)

Fail. I've successfully posted Java applets a few times, but as soon as I edit them, they just get displayed as code.

At least the algorithms aren't long, and also only apply to the beginner stages. I hope this will provide a few ideas for further optimizing blindfolded methods.

_[This post was edited by the author on 2006-3-18 20:11:40]_

## Post #6 by gan (2006-3-30 12:05:36)

I researched the two-step method. It requires memorizing 20 two-digit numbers, while the 5-step method requires 20 single-digit numbers.
Corner and edge orientation are used to memorize the solving algorithms. It feels somewhat comparable, but I don't understand the memory advantage of the two-step method (I guess it's that you only look once to remember permutation and orientation, but it still feels like a lot of memorization)

## Post #7 by 彳亍 (2006-3-31 00:55:26)

Memorization is just a process of becoming skilled. Similar to how corner edge orientation are used to memorize the solving algorithms, here, for every two pieces solved only one number needs to be memorized. In ideal situations, memorizing 10 single-digit numbers is enough.

## Post #8 by shanghai (2006-4-3 19:10:49)

Bump

## Post #9 by 彳亍 (2006-7-29 18:16:18)

To remember orientation and permutation, you can refer to the 4x4 cube memorization method and use letters A to X instead.

There are 12 edges, each edge has two orientations. For example red-white is A, white-red is B, for a total of 24 letters.

There are 8 corners each with three orientations, which also gives 24 letters. Each 3-cycle is memorized as two pieces, and a pair of letters combined represents one meaning. You can refer to Chris' memorization code at http://www.speedcubing.com/chris/memorizing.html.

For example, AE can be aeroplane; AN can be ant.
You can even create your own set of 3-letter or 4-letter codes, which would further reduce the amount you need to memorize.

## Post #10 by 臭虫 (2006-7-30 09:06:02)

New method! Looking forward to it, bumping this first.
