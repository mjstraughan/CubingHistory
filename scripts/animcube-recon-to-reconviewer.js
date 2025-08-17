/*
This script helps migrate the site from Animcube to cubing.js for reconstructions specifically
It allows batch converting an Animcube applet with ReconstructionConfig to our new `<ReconViewer>` component powered by cubing.js
How to use:
1. Copy the contents of each applet's `config="..."` to `paramsList`, each on separate lines
2. Run this script with `node scripts/animcube-recon-to-reconviewer.js`
3. Script generates the React code for `<ReconViewer>`, copy paste back into the Markdown files
*/

// ADD MORE LINES HERE
const paramsList = `
config=../../ReconstructionConfig.txt &initmove=U' D B R' B U' D2 F' L2 D B2 L2 U' F2 L2 U D2 L2 F2 R&move={Scramble: U' D B R' B U' D2 F' L2 D B2 L2 U' F2 L2 U D2 L2 F2 R}{Special case: M' S' M2 S M'}M' S' M2 S M'.{RB: R2' F' U' (R' F2 R2 E' R' S' R' F2 R S) U F R2}R2' F' U' (R' F2 R2 E' R' S' R' F2 R S) U F R2.{LU: U' F R (R' F2 R2 E' R' S' R' F2 R S) R' F' U}U' F R (R' F2 R2 E' R' S' R' F2 R S) R' F' U.{FL: F2 R (R' F2 R2 E' R' S' R' F2 R S) R' F2}F2 R (R' F2 R2 E' R' S' R' F2 R S) R' F2.{UR: (R' F2 R2 E' R' S' R' F2 R S)}(R' F2 R2 E' R' S' R' F2 R S).{RU: U F R (R' F2 R2 E' R' S' R' F2 R S) R' F' U'}U F R (R' F2 R2 E' R' S' R' F2 R S) R' F' U'.{UB: U (R' F2 R2 E' R' S' R' F2 R S) U'}U (R' F2 R2 E' R' S' R' F2 R S) U'.{FR: R (R' F2 R2 E' R' S' R' F2 R S) R'}R (R' F2 R2 E' R' S' R' F2 R S) R'.{DB: D' R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D}D' R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D.{LD: D2 R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D2}D2 R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D2.{FD: F' R (R' F2 R2 E' R' S' R' F2 R S) R' F}F' R (R' F2 R2 E' R' S' R' F2 R S) R' F.{UF: U' (R' F2 R2 E' R' S' R' F2 R S) U}U' (R' F2 R2 E' R' S' R' F2 R S) U.{RD: R F' U' (R' F2 R2 E' R' S' R' F2 R S) U F R'}R F' U' (R' F2 R2 E' R' S' R' F2 R S) U F R'.{UB: U (R' F2 R2 E' R' S' R' F2 R S) U'}U (R' F2 R2 E' R' S' R' F2 R S) U'.{DB: D' R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D}D' R2 (R' F2 R2 E' R' S' R' F2 R S) R2 D.{UBR: U (R B R' U2' r U' r B r2' U2') U'}U (R B R' U2' r U' r B r2' U2') U'.{FLU: F2 R (R B R' U2' r U' r B r2' U2') R' F2}F2 R (R B R' U2' r U' r B r2' U2') R' F2.{DLF: F2 (R B R' U2' r U' r B r2' U2') F2}F2 (R B R' U2' r U' r B r2' U2') F2.{FUR: R U (R B R' U2' r U' r B r2' U2') U' R'}R U (R B R' U2' r U' r B r2' U2') U' R'.{LBU: U R' (R B R' U2' r U' r B r2' U2') R U'}U R' (R B R' U2' r U' r B r2' U2') R U'.{DRB: R2 (R B R' U2' r U' r B r2' U2') R2}R2 (R B R' U2' r U' r B r2' U2') R2.{DFR: R2 U (R B R' U2' r U' r B r2' U2') U' R2}R2 U (R B R' U2' r U' r B r2' U2') U' R2
`;

function animcubeParamsToReconViewer(params) {
  const regexp = /{.*?}/g;
  // get only the stuff within the curly braces
  const lines = [...params.matchAll(regexp)].map((line) => line[0]);
  const formatted = lines.map((line) => {
    // take out the curly braces
    const withoutBraces = line.substring(1, line.length - 1);
    // get the comment and moves
    const [comment, moves] = withoutBraces.split(": ");
    return { comment, moves };
  });

  const scramble = formatted[0].moves;
  const solution = formatted
    .slice(1)
    .map(({ comment, moves }) => {
      return `${moves} . // ${comment}`;
    })
    .join("\n");

  return `<ReconViewer
  scramble="${scramble}"
  solution={\`${solution}\`}
/>`;
}

paramsList
  .split("\n")
  .filter((l) => l)
  .forEach((params, index) => {
    console.log(`Reconstruction #${index + 1}:\n`);
    console.log(animcubeParamsToReconViewer(params) + "\n\n");
  });
