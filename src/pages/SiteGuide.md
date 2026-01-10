# Cubing History Guide

## Development set up:

1. Set up a GitHub account.
2. Download Visual Studio Code.
3. Install Git if necessary. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
4. Install node.js: https://nodejs.org/en/download/. Then in VSCode, go to Terminal in the top menu bar then New Terminal. In the Terminal at the bottom of VSCode, install npm by typing ```npm install```
5. In VSCode, go to Extensions on the left and install the extension called GitHub Pull Requests.
6. Click the Accounts symbol at the bottom left and sign in to your GitHub account.
7. Clone the Cubing History GitHub repository. The simplest way is to click the “Source Control” icon on the left side, click “Clone Repository”, at the top of the VSCode application click “Clone from GitHub”, then click the Cubing History repository in the drop down or search for it.
8. Save the repository in a memorable place, then choose to open it when prompted by VSCode. Otherwise, go to File > Open Folder and choose the Cubing History folder then open it. Each time you want to make site changes, you can open the same cloned folder that you saved.
9. From here, there is a pretty standard file system on the left side of VSCode.
10. Go to the “docs” folder to add or edit pages.

## Making edits:

The site uses Docusaurus and pages are written in Markdown.

* In the Terminal in VSCode, enter ```npm run start``` to open a local preview of the page in your browser. Each time you make changes in VSCode and save, this page will automatically update.

* If you are just joining the team, it is best that you submit your pages or changes through a pull request rather than making a commit.

## Markdown and tags:

* Simply type text for it to be displayed normally.
* #, ##, ###, and so on before text produces varying header sizes.
* Surround text on both sides by * for italics, ** for bold, or *** for italics and bold.
* For references, use the format ```[^rubik-1974]``` within the text, then also at the bottom of the page, line by line add the complete reference information as in ```[^rubik]: E. Rubik, Magic Cube, Hungary, 1974.``` Almost every page has multiple references, so use those existing pages as a format guide. References follow the format of ```[^lastname-year]```. Use ```[^lastname1-lastname2-year]``` for multiple involved individuals in the reference. Use ```[^lastname-year-number]``` if there are multiple references from the same last name and year, and add 1, 2, 3 and so on after the year.
* At the very top of most pages is special code that contains a short page description for search engine and social card purposes. You may also include in this code a sidebar position if you are adding a new page and if it seems necessary to have a specific order for the pages within a category. In most cases, the site doesn’t include the sidebar position line and allows Docusaurus to default to alphabetical order. The code looks like below:

```
---
sidebar_position: 1
description: History of Rubik's Cube.
---
```

* Similarly, each section contains a \_category_.json file for changing the displayed name of the category and the position number where the category should be in the sidebar.
* To add images to a page, use:

```![](path_to_image)```

* To add multiple images into a collage with individual images having a click to zoom feature, add an import line just below the double \--- header code at the top of the page. Then wherever you want the image collage, use the Image Collage tag, adding as many images as needed within the tag.

```import ImageCollage from '@site/src/components/ImageCollage';```

```
<ImageCollage
images={[
{ src: require("@site/docs/path_to_image).default},
{ src: require("@site/docs/path_to_image).default}
]}
/>
```

* YouTube videos import line and tag:

```import YouTube from "@site/src/components/YouTube";```

```<YouTube embedId="" />``` (add the video id within the quotes)

* Videos stored within the GitHub repository:

```import ReactPlayer from 'react-player'```

```
<div className='player-wrapper'>
<ReactPlayer
          className='react-player'
          playing controls url='/videos/video.mp4'
          playing={false}
          width='100%'
          height='100%'
        /> 
</div>
```
* Adding a rotation enabled only puzzle applet:

```import Exhibit from "@site/src/components/Exhibit";```

```
<Exhibit
stickering={{
    solved: "L R FL DFL DL DBL BL FR DFR DR DBR BR UFR UFL UBL UBR"}}
/>
```

To get an idea of possible ways of setting up the puzzle, check the Method Shapes page for examples.

* For more complex functionality with the puzzle applet, such as more custom stickering, or displaying a control bar:

```import TwistyPlayer from "@site/src/components/TwistyPlayer";```

```
<TwistyPlayer
  alg="x2 D2 U2 L2 B2 L2"
 controlPanel="none"
/>
```

* To show a turn by turn reconstruction along with the puzzle applet:

```import ReconViewer from "@site/src/components/ReconViewer";```

```
<ReconViewer
scramble="U L2 D' B2 U' R2 B2 F2 D' F2 L2 R2 F R2 D L2 R2 B' L' D' R F'"
solution={`x2 y . // Inspection
D' R u D R' y' D' R D R' . // First layer corners and one edge
y D r' E' L . // First layer center and second edge
z2 U y l D R' z' R' x z' r' R2 U2 z D R2 D2 . // CLL
R' l' z M D2 M' . // First layer third edge
z2 y R z' M z R' . // Last layer first edge
z' r' L' z D R' E R . // Last layer second edge
U' u' R E' R' . // Last layer third edge
u R' E' R E2 R E R' . // Last six edges
R2 E E' r2 E M2 E' // Last four centers`}
/>
```