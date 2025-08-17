---
sidebar_position: 5
description: History of Rubik's Cube solving method shapes
---

import TwistyPlayer from "@site/src/components/TwistyPlayer";
import Exhibit from "@site/src/components/Exhibit";
import YouTube from "@site/src/components/YouTube";
import ImageCollage from '@site/src/components/ImageCollage';

# Method Shapes

A list of significant shapes that have defined the various methods. This page is influenced by, and is an extension of, Ryan Heise's page that covered some of the early method shapes.

https://www.ryanheise.com/cube/solutions_history.html

## Eight Corners

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR UFR UFL UBL UBR"}}
/>

**Method:** Corners First

**Proposer:** Ernő Rubik (1974)

## Twelve Edges

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR FR FL BL BR UF UL UB UR"}}
/>

**Method:** Edges First

**Proposer:** Ulrich Roddewig (1979, earliest known)

## Cross

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR"}}
/>

**Method:** Layer By Layer, CFOP, CFCE

**Proposer:** Donald Taylor (1978, earliest known)

## Cross + F2L Pairs

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR FR FL BL BR",
    dim: "U D F B L R DF DL DB DR"
}}
/>

**Method:** CFOP, CFCE

**Proposer:** John Conway, David Benson, and David Seal (1979)

## Oriented State

<TwistyPlayer
  alg="x2 D2 U2 L2 B2 L2"
 controlPanel="none"
/>

**Method:** Thistlethwaite, Kociemba, Human Thistlethwaite, MI2, SSC

**Proposer:** Morwen Thistlethwaite (1979-1980)

## EOLine > Oriented State

<Exhibit
stickering={{
    dim: "L R U D F B FL BL",
    orientedWithoutPermutation: "DFR DF DFL DL DBL DB DBR DR FR BR UFR UF UFL UL UBL UB UBR UR"
}}
/>

**Method:** MI2, SSC

**Proposer:** James Straughan (2011), Joseph Briggs (2015)

## Layer + LL Corners

<Exhibit
stickering={{
    solved: "L R U D F B DFR DFL DBL DBR DF DL DB DR UFR UFL UBL UBR"
}}
/>

**Method:** Waterman

**Proposer:** Marc Waterman and Daan Krammer (1981), Others prior (1979-1981)

## 2x2x3 Block

<Exhibit
stickering={{
    solved: "L R U D F B DF DFL DL DBL DB FL BL"
}}
/>

**Method:** Petrus, early unnamed methods by Thistlethwaite and Jackson

**Proposer:** Morwen Thistlethwaite (1979), Bradley Jackson (1979), Lars Petrus (1981)

## XCross

<Exhibit
stickering={{
    solved: "L R U D F B DF DL DBL DB DR BL"
}}
/>

**Method:** CFOP, CFCE, Snyder Method 2

**Proposer:** Anthony Snyder (1982 for Snyder Method 2), Chris Hardwick (2003 for CFOP)

## Tripod

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DR DFL DBL DBR FL BL BR UL UB UBL"}}
/>

**Method:** Tripod

**Proposer:** Ryan Heise (2002), Michael Gottlieb (2008)

## Doug Li Block

<Exhibit
stickering={{
    solved: "L R U D F B DF DFL FL DBL DB BL"
}}
/>

**Method:** Doug Li

**Proposer:** Doug Li (2002)

## 1x2x3 Block Start

<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL"
}}
/>

**Method:** Roux

**Proposer:** Gilles Roux (2003)

## Four Squares

<TwistyPlayer
alg="x2 B L F"
experimentalStickeringMaskOrbits="EDGES:----IIIII---,CORNERS:I---IIII,CENTERS:------"
controlPanel="none"
/>

**Method:** Heise

**Proposer:** Ryan Heise (2003)

## Cross + One Corner

<Exhibit
stickering={{
    solved: "L R U D F B DF DL DBL DB DR"
}}
/>

**Method:** L2L

**Proposer:** Duncan Dicks (2004)

## Columns

<Exhibit
stickering={{
    solved: "DFR DFL DBL DBR FR FL BL BR UFR UFL UBL UBR"}}
/>

**Method:** Columns First

**Proposer:** Various (2004, 2007, and further)

## 1x2x3 + adjacent 1x2x2 block

<Exhibit
stickering={{
    solved: "U D F B L R DL DB DFL DBL DBR FL BL BR"}}
/>

**Method:** MI1

**Proposer:** Michael James Straughan (2006)

## 1x2x3 + 2x2x2 block

<Exhibit
stickering={{
    solved: "U D F B L R DL DB DR DFL DBL DBR FL BL BR"}}
/>

**Method:** Nautilus, M-CELL

**Proposer:** Michael James Straughan (2006), Joseph Briggs (2015)

## EOLine

<Exhibit
stickering={{
    solved: "U D F B L R DF DB",
    orientedWithoutPermutation: "UL UF UR UB FL FR BL BR DL DR"
  }}
/>

**Method:** ZZ

**Proposer:** Gilles Roux and Adam Géhin (~2003), Ryan Heise (2004, based on Géhin's video), Ron van Bruchem

**Published by:** Zbigniew Zborowski

## 2x2x3 + Corners

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DFL DBL FL BL DFR DBR UFR UFL UBL UBR"}}
/>

**Method:** Tudor

**Proposer:** Kenneth Gustavsson and others (2007+), Joseph Tudor (2018)

## 1x2x3 + opposite 1x2x2 block

<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL BR DBR DR"}}
/>

**Method:** 42

**Proposer:** Joseph Briggs (2017)

## 2x2x3 + EOBelt

<Exhibit
stickering={{
    solved: "U D F B L R DF DL DB DFL DBL FR FL BL BR",
    orientedWithoutPermutation: "UL UF UR UB DR"
  }}
/>

**Method:** Mehta

**Proposer:** Yash Mehta (2020)

## EOSquare

<Exhibit
stickering={{
    solved: "L R DL BL DBL",
    orientedWithoutPermutation: "DF DB DR FR FL BR UF UL UB UR"
  }}
/>

**Method:** Squall

**Proposer:** Vincent Trang (2021)