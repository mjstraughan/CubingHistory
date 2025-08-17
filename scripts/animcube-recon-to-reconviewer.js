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
config=../../ReconstructionConfig.txt&initmove=U' B2 L2 R2 U' L2 U' F2 D2 U' R' D' U' F U' R' B' U F L2 R' U2&move={Scramble: U' B2 L2 R2 U' L2 U' F2 D2 U' R' D' U' F U' R' B' U F L2 R' U2}{Inspection: x2 y}x2 y.{Xcross: D L F' D' U L F' L' F R}D L F' D' U L F' L' F R.{2nd pair: U L U' L'}U L U' L'.{3rd pair: R' F R F' R U' R2'}R' F R F' R U' R2'.{4th pair: U R}U R.{OLL: U2' r U R' U R U2' r'}U2' r U R' U R U2' r'.{PLL: R U' R' U' R U R D R' U' R D' R' U2 R'}R U' R' U' R U R D R' U' R D' R' U2 R'
config=../../ReconstructionConfig.txt&initmove=F2 R2 D' L2 B2 L2 U' F2 U2 L2 F L' R' U2 F2 L2 U' L' U2 B L'&move={Scramble: F2 R2 D' L2 B2 L2 U' F2 U2 L2 F L' R' U2 F2 L2 U' L' U2 B L'}{Inspection: y2}y2.{Cross: U' L' F' D' R' F R2}U' L' F' D' R' F R2.{1st pair: U' y U' L' U' L}U' y U' L' U' L.{2nd pair: U D' R' U' R U u}U D' R' U' R U u.{3rd pair: L' U L R U' R'}L' U L R U' R'.{4th pair: U' L F' L' F U' L' U L}U' L F' L' F U' L' U L.{OLL(CP): l' U' L U' L' U2 l}l' U' L U' L' U2 l.{EPLL: U' R2' U R U R' U' R3 U' R' U R' U'}U' R2' U R U R' U' R3 U' R' U R' U'
config=../../ReconstructionConfig.txt&initmove=L2 D R2 D B2 L2 U2 B2 L2 D L' D2 F D2 R2 U2 L' R' F D' R&move={Scramble: L2 D R2 D B2 L2 U2 B2 L2 D L' D2 F D2 R2 U2 L' R' F D' R}{Cross: D L' D' L l' U' l}D L' D' L l' U' l.{1st pair: d L' U2 L}d L' U2 L.{2nd pair: U' R U R2' U' R}U' R U R2' U' R.{3rd pair: U R U' R' y' L' U' L}U R U' R' y' L' U' L.{4th pair: R' U' R U R' U2' R}R' U' R U R' U2' R.{OLL: U r' U2' R U R' U r}U r' U2' R U R' U r.{PLL: U2' U L' U' L F L' U' L U L F' L2' U L}U2' U L' U' L F L' U' L U L F' L2' U L
config=../../ReconstructionConfig.txt&initmove=L2 R2 D' U2 B2 D2 U' F2 L2 B2 L' B' F R F R B R B' F'&move={Scramble: L2 R2 D' U2 B2 D2 U' F2 L2 B2 L' B' F R F R B R B' F'}{Inspection: x' z2}x' z2.{Xcross: F' U' D r' R F' U R U R' D2}F' U' D r' R F' U R U R' D2.{2nd pair: U' y U' R U R' U' L U L2'}U' y U' R U R' U' L U L2'.{3rd pair: U L}U L.{4th pair: U R U R' U R U' R'}U R U R' U R U' R'.{OLL(CP): R U2' R' U' R U' R'}R U2' R' U' R U' R'
config=../../ReconstructionConfig.txt&initmove=B2 D' L2 D L2 D' L2 U2 F2 R2 F L2 B R D' R2 F U L2 F D U'&move={Scramble: B2 D' L2 D L2 D' L2 U2 F2 R2 F L2 B R D' R2 F U L2 F D U'}{Inspection: z2 y}z2 y.{Xcross: R' U' R2 F' D U L U' L' U' r U' r'}R' U' R2 F' D U L U' L' U' r U' r'.{2nd pair: R U' R' U R' U2' R}R U' R' U R' U2' R.{3rd pair: F U F' U' L' U L}F U F' U' L' U L.{4th pair: U R U' R' U' R U R'}U R U' R' U' R U R'.{OLL: U' R' F R U R' F' R F U' F'}U' R' F R U R' F' R F U' F'.{PLL: R U R' U' R' F R2 U' R' U' R U R' F' U}R U R' U' R' F R2 U' R' U' R U R' F' U
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
