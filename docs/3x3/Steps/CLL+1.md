# APB

## Description

CLL+1 is a method for solving the last layer.

**Proposer:** [Thom Barlow](CubingContributors/MethodDevelopers.md#barlow-thom-kirjava), [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre)

**Proposed:** 2010

**Developed:** 2020

**Steps:**

1. Solve the last layer corners and one edge.
2. Solve the last three edges.

[Click here for more step details on the SpeedSolving wiki](https://www.speedsolving.com/wiki/index.php/CLL%2B1)

## Origin

### Idea

Thom Barlow started discussing the idea around 2010.[<sup>1</sup>][1] However, there wasn't a system to make it work. Discussions for the idea were occurring in IRC and on speedsolving.com.

![](img/CLL+1/Barlow1.png)

### Systems

In response to Barlow's search for a system to make CLL+1 work, Michael James Straughan offered a few ideas.[<sup>2</sup>][2] [<sup>3</sup>][3] [<sup>4</sup>][4]

![](img/CLL+1/Straughan1.png)
![](img/CLL+1/Straughan2.png)
![](img/CLL+1/Straughan3.png)

In February, 2017, Louis de Mendonça mentioned an idea of phasing or unphasing the LL edges and using inverted edge orientation algorithms depending on the edge orientation case.[<sup>5</sup>][5] [<sup>6</sup>][6]

![](img/CLL+1/Louis1.png)
![](img/CLL+1/Louis2.png)

## Development

In May, 2020 James Straughan started looking into the CLL+1 problem again. A short conversation was had with Mendonça and Joseph Tudor.[<sup>7</sup>][7]

![](img/CLL+1/Straughan4.png)

In July, 2020, Straughan discovered the algorithm union concept while trying to solve the CLL+1 problem.[<sup>8</sup>][8] The idea was to have one algorithm that permutes the edges in one way, and another algorithm that permutes the edges in a different way. The two algorithms can together solve the 12 sub-cases for a COLL algorithm set. This made COLL+1 work. For CLL+1, Straughan had the idea of having one algorithm flip the edge orientation one way and another algorithm that flips the edge orientation in the opposite way. The edge orientation idea turned out to be the same as that once suggested by Mendonça.

![](img/CLL+1/Straughan5.png)

In September, 2020, Straughan completed development of CLL+1 and COLL+1.[<sup>9</sup>][9]

![](img/CLL+1/Straughan6.png)

[1]: https://www.speedsolving.com/threads/random-cubing-discussion.22862/post-495052
[2]: https://www.speedsolving.com/threads/random-cubing-discussion.22862/post-495230
[3]: https://www.speedsolving.com/threads/random-cubing-discussion.22862/page-21#post-496431
[4]: https://www.speedsolving.com/threads/random-cubing-discussion.22862/page-85#post-741058
[5]: https://www.speedsolving.com/threads/need-help-list-of-all-zz-variants.63869/post-1220062
[6]: https://www.speedsolving.com/threads/need-help-list-of-all-zz-variants.63869/post-1220075
[7]: https://discord.com/channels/416929203607568404/416933073893195779/712514867403423765
[8]: https://discord.com/channels/416929203607568404/416933092620500992/730053033626435661
[9]: https://www.speedsolving.com/threads/cll-1-an-advanced-ll-method-complete-and-fully-generated.78631/#post-1394716