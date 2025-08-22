---
sidebar_position: 5
description: History of Rubik's Cube solving method shapes
---

import TwistyPlayer from "@site/src/components/TwistyPlayer";
import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import ImageCollage from '@site/src/components/ImageCollage';

# Method Shapes

A list of significant shapes that have defined the various methods. This page is influenced by, and is an extension of, [Ryan Heise's page](https://www.ryanheise.com/cube/solutions_history.html) that covered some of the early method shapes.

## Eight Corners

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR UFR UFL UBL UBR"}}
/>

**Method:** [Corners First](3x3/Methods/CornersFirst.md)

**Proposer:** [Ernő Rubik](CubingContributors/MethodDevelopers.md#rubik-ernő) (1974)

## Twelve Edges

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR FR FL BL BR UF UL UB UR"}}
/>

**Method:** [Edges First](3x3/Methods/EdgesFirst.md)

**Proposer:** [Ulrich Roddewig](CubingContributors/MethodDevelopers.md#roddewig-ulrich) (1979, earliest known)

## Cross

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR"}}
/>

**Method:** [Layer By Layer](3x3/Methods/LayerByLayer.md), [CFOP](3x3/Methods/CFOP.md), [CFCE](3x3/Methods/CFCE.md)

**Proposer:** [Donald Taylor](CubingContributors/MethodDevelopers.md#taylor-donald) (1978, earliest known)

## Cross + F2L Pairs

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR FR FL BL BR",
    dim: "U D F B L R DF DL DB DR"
}}
/>

**Method:** [CFOP](3x3/Methods/CFOP.md), [CFCE](3x3/Methods/CFCE.md)

**Proposer:** [John Conway](CubingContributors/MethodDevelopers.md#conway-john), [David Benson](CubingContributors/MethodDevelopers.md#benson-david), [David Seal](CubingContributors/MethodDevelopers.md#seal-david) (1979)

## Oriented State

<TwistyPlayer
  alg="x2 D2 U2 L2 B2 L2"
 controlPanel="none"
/>

**Method:** [Thistlethwaite](3x3/3x3ComputerAlgorithms.md#morwen-thistlethwaite-1980), [Kociemba](3x3/3x3ComputerAlgorithms.md#herbert-kociemba-1992), [Human Thistlethwaite](3x3/Methods/HumanThistlethwaite.md), [Polaris](Methods/Polaris), [SSC](3x3/Methods/Ssc.md), [Square 101](3x3/Methods/Square101.md)

**Proposer:** [Morwen Thistlethwaite](CubingContributors/MethodDevelopers.md#thistlethwaite-morwen) (1979-1980)

## EOLine > Oriented State

<Exhibit
stickering={{
    dim: "L R U D F B FL BL",
    orientedWithoutPermutation: "DFR DF DFL DL DBL DB DBR DR FR BR UFR UF UFL UL UBL UB UBR UR"
}}
/>

**Method:** [Polaris](Methods/Polaris), [SSC](3x3/Methods/Ssc.md), [Square 101](3x3/Methods/Square101.md)

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre) (2010), [Joseph Briggs](CubingContributors/MethodDevelopers.md#briggs-joseph-shadowslice) (2015), [Vincent Trang](CubingContributors/MethodDevelopers.md#trang-vincent-trangium) (2020)

## Layer + LL Corners

<Exhibit
stickering={{
    solved: "L R U D F B DFR DFL DBL DBR DF DL DB DR UFR UFL UBL UBR"
}}
/>

**Method:** [Waterman](3x3/Methods/Waterman.md)

**Proposer:** [Marc Waterman](CubingContributors/MethodDevelopers.md#waterman-marc) and [Daan Krammer](CubingContributors/MethodDevelopers.md#krammer-daan) (1981), Others prior (1979-1981)

## 2x2x3 Block

<Exhibit
stickering={{
    solved: "L R U D F B DF DFL DL DBL DB FL BL"
}}
/>

**Method:** [Petrus](3x3/Methods/Petrus.md), early unnamed methods by Thistlethwaite and Jackson

**Proposer:** [Morwen Thistlethwaite](CubingContributors/MethodDevelopers.md#thistlethwaite-morwen) (1979), Bradley Jackson (1979), [Petrus](3x3/Methods/Petrus.md) (1981)

## XCross

<Exhibit
stickering={{
    solved: "L R U D F B DF DL DBL DB DR BL"
}}
/>

**Method:** [CFOP](3x3/Methods/CFOP.md), [CFCE](3x3/Methods/CFCE.md), [Snyder Method 2](3x3/Methods/SnyderMethod2.md)

**Proposer:** [Anthony Snyder](CubingContributors/MethodDevelopers.md#snyder-anthony) (1982 for Snyder Method 2), [Chris Hardwick](CubingContributors/MethodDevelopers.md#hardwick-chris) (2003 for CFOP)

## Tripod

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR DFL DBL DBR FL BL BR UL UB UBL"}}
/>

**Method:** [Tripod](3x3/Methods/Tripod.md)

**Proposer:** [Ryan Heise](CubingContributors/MethodDevelopers.md#heise-ryan) (2002), [Michael Gottlieb](CubingContributors/MethodDevelopers.md#gottlieb-michael) (2008)

## Doug Li Block

<Exhibit
stickering={{
    solved: "L R U D F B DF DFL FL DBL DB BL"
}}
/>

**Method:** [Doug Li](3x3/Methods/DougLi.md)

**Proposer:** [Doug Li](CubingContributors/MethodDevelopers.md#li-doug) (2002)

## Two 1x2x3 Blocks

<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL FR DFR DR DBR BR"
}}
/>

**Method:** [Roux](3x3/Methods/Roux.md)

**Proposer:** [Gilles Roux](CubingContributors/MethodDevelopers.md#roux-gilles) (2003)

## Four Squares

<TwistyPlayer
alg="x2 B L F"
experimentalStickeringMaskOrbits="EDGES:----IIIII---,CORNERS:I---IIII,CENTERS:------"
controlPanel="none"
/>

**Method:** [Heise](3x3/Methods/Heise.md)

**Proposer:** [Ryan Heise](CubingContributors/MethodDevelopers.md#heise-ryan) (2003)

## Cross + One Corner

<Exhibit
stickering={{
    solved: "L R U D F B DF DL DBL DB DR"
}}
/>

**Method:** [L2L](3x3/Methods/L2L.md)

**Proposer:** [Duncan Dicks](CubingContributors/MethodDevelopers.md#dicks-duncan) (2004)

## Columns

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR FR FL BL BR UFR UFL UBL UBR"}}
/>

**Method:** [Columns First](3x3/Methods/ColumnsFirst.md)

**Proposer:** Various (2004, 2007, and further)

## 1x2x3 + adjacent 1x2x2 block

<Exhibit
stickering={{
    solved: "U D F B L R DL DB DFL DBL DBR FL BL BR"}}
/>

**Method:** [MI1](3x3/Methods/Mi1.md)

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre) (2006)

## 1x2x3 + 2x2x2 block

<Exhibit
stickering={{
    solved: "U D F B L R DL DB DR DFL DBL DBR FL BL BR"}}
/>

**Method:** [Nautilus](3x3/Methods/Nautilus.md)

**Proposer:** [Michael James Straughan](CubingContributors/MethodDevelopers.md#straughan-michael-james-athefre) (2006)

## EOLine

<Exhibit
stickering={{
    solved: "U D F B L R DF DB",
    orientedWithoutPermutation: "UL UF UR UB FL FR BL BR DL DR"
  }}
/>

**Method:** [ZZ](3x3/Methods/Zz.md)

**Proposer:** [Gilles Roux](CubingContributors/MethodDevelopers.md#roux-gilles) and [Adam Géhin](CubingContributors/MethodDevelopers.md#géhin-adam) (~2002), [Ryan Heise](CubingContributors/MethodDevelopers.md#heise-ryan) (2003, based on Géhin's video), [Ron van Bruchem](CubingContributors/MethodDevelopers.md#bruchem-ron-van), [Zbigniew Zborowski](CubingContributors/MethodDevelopers.md#zborowski-zbigniew)

**Published by:** Zbigniew Zborowski

## 2x2x3 + Corners

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DFL DBL FL BL DFR DBR UFR UFL UBL UBR"}}
/>

**Method:** [Tudor](3x3/Methods/Tudor.md)

**Proposer:** [Kenneth Gustavsson](CubingContributors/MethodDevelopers.md#gustavsson-kenneth) and others (2007+), [Joseph Tudor](CubingContributors/MethodDevelopers.md#tudor-joseph) (2018)

## F2L Minus First Layer Pair

<Exhibit
stickering={{
    solved: "U D F B L R FL DFL DL DBL BL DB BR DR DBR FR"}}
/>

**Method:** [M-CELL](3x3/Methods/M-CELL.md)

**Proposer:** [Joseph Briggs](CubingContributors/MethodDevelopers.md#briggs-joseph-shadowslice) (2015)

## 1x2x3 + opposite 1x2x2 block

<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL BR DBR DR"}}
/>

**Method:** [42](3x3/Methods/42.md)

**Proposer:** [Joseph Briggs](CubingContributors/MethodDevelopers.md#briggs-joseph-shadowslice) (2017)

## 2x2x3 + EOBelt

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DFL DBL FR FL BL BR",
    orientedWithoutPermutation: "UL UF UR UB DR"
  }}
/>

**Method:** [Mehta](3x3/Methods/Mehta.md)

**Proposer:** [Yash Mehta](CubingContributors/MethodDevelopers.md#mehta-yash) (2020)

## EOSquare

<Exhibit
stickering={{
    solved: "L R DL BL DBL",
    orientedWithoutPermutation: "DF DB DR FR FL BR UF UL UB UR"
  }}
/>

**Method:** [Squall](3x3/Methods/Squall.md)

**Proposer:** [Vincent Trang](CubingContributors/MethodDevelopers.md#trang-vincent-trangium) (2021)