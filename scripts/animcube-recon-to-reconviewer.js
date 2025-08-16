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
config=../../ReconstructionConfig.txt&move={Scramble: U L2 D' B2 U' R2 B2 F2 D' F2 L2 R2 F R2 D L2 R2 B' L' D' R F'}{Inspection: x2 y}x2 y.{First layer corners and one edge: D' R u D R' y' D' R D R'}D' R u D R' y' D' R D R'.{First layer center and second edge: y D r' E' L}y D r' E' L.{CLL: z2 U y l D R' z' R' x z' r' R2 U2 z D R2 D2}z2 U y l D R' z' R' x z' r' R2 U2 z D R2 D2.{First layer third edge: R' l' z M D2 M'}R' l' z M D2 M'.{Last layer first edge: z2 y R z' M z R'}z2 y R z' M z R'.{Last layer second edge: z' r' L' z D R' E R}z' r' L' z D R' E R.{Last layer third edge: U' u' R E' R'}U' u' R E' R'.{Last six edges: u R' E' R E2 R E R'}u R' E' R E2 R E R'.{Last four centers: R2 E E' r2 E M2 E'}R2 E E' r2 E M2 E'&initmove=U L2 D' B2 U' R2 B2 F2 D' F2 L2 R2 F R2 D L2 R2 B' L' D' R F'
config=../../ReconstructionConfig.txt&move={Scramble: B R D2 F2 R F2 U D F2 R2 L2 D' U' R2 U2 F' L' B2 F R U2 R' B F U2}{Inspection: z2 y'}z2 y'.{Cross: R F R U' R}R F R U' R.{First Pair: R' U2 R2 U R'}R' U2 R2 U R'.{Second Pair: d R U' R' U2 F' U' F}d R U' R' U2 F' U' F.{Third Pair: L' U' L2 U L'}L' U' L2 U L'.{Fourth Pair: U L' U L}U L' U L.{OLL: y2 F R U R' U' F'}y2 F R U R' U' F'.{PLL: U y R B' R F2 R' B R F2 R2}U y R B' R F2 R' B R F2 R2&initmove=B R D2 F2 R F2 U D F2 R2 L2 D' U' R2 U2 F' L' B2 F R U2 R' B F U2
`;

function animcubeParamsToReconViewer(params) {
  const regexp = /{.*?}/g;
  // get only the stuff within the curly braces
  const lines = [...params.matchAll(regexp)].map(line => line[0]);
  const formatted = lines.map(line => {
    // take out the curly braces
    const withoutBraces = line.substring(1, line.length - 1);
    // get the comment and moves
    const [comment, moves] = withoutBraces.split(": ");
    return { comment, moves };
  })

  const scramble = formatted[0].moves;
  const solution = formatted.slice(1).map(({ comment, moves }) => {
    return `${moves} . // ${comment}`;
  }).join("\n");

  return `<ReconViewer
  scramble="${scramble}"
  solution={\`${solution}\`}
/>`;
}

paramsList
  .split("\n")
  .filter(l => l)
  .forEach((params, index) => {
    console.log(`Reconstruction #${index + 1}:\n`);
    console.log(animcubeParamsToReconViewer(params) + "\n\n");
  });
