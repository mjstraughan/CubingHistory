import TwistyPlayer from "../TwistyPlayer";

/**
 * Method exhibit component
 * Uses special syntax to make it easier to define custom stickering
 * Stickering options are solved, dim, ignored, permuted, oriented, orientedWithoutPermutation, invisible
 * For each option, pass in a string with piece names separated by spaces.
 * THe camera latitude and longitude can be set as well (both default to 45 degrees)
 * Below is 2GR example:
 * @example
 * <Exhibit
  stickering={{
    solved: "U D F B L R DL DBL",
    orientedWithoutPermutation: "UL UF UR UB FL FR BL BR DF DR DB"
  }}
  defaultOption="ignored"
  cameraLatitude={30}
  cameraLongitude={-20}
/>
 */
export default function Exhibit({
  stickering,
  defaultOption = "ignored",
  cameraLatitude = 45,
  cameraLongitude = 45,
}) {
  const defaultStickeringChar = STICKERING_CHARS_MAP[defaultOption];
  const edges = Array(12).fill(defaultStickeringChar);
  const corners = Array(8).fill(defaultStickeringChar);
  const centers = Array(6).fill(defaultStickeringChar);

  for (const [option, pieces] of Object.entries(stickering)) {
    for (const piece of pieces.toUpperCase().split(" ")) {
      const stickeringChar = STICKERING_CHARS_MAP[option];
      if (piece.length === 1) {
        centers[centerIndices[piece]] = stickeringChar;
      } else if (piece.length === 2) {
        edges[edgeIndices[piece]] = stickeringChar;
      } else {
        corners[cornerIndices[piece]] = stickeringChar;
      }
    }
  }

  const maskOrbits = `EDGES:${edges.join("")},CORNERS:${corners.join(
    ""
  )},CENTERS:${centers.join("")}`;
  return (
    <TwistyPlayer
      controlPanel="none"
      cameraLatitude={cameraLatitude}
      cameraLongitude={cameraLongitude}
      rotateStickering="x2"
      experimentalStickeringMaskOrbits={maskOrbits}
    />
  );
}

const STICKERING_CHARS_MAP = {
  solved: "-",
  dim: "D",
  ignored: "I",
  permuted: "P",
  oriented: "O",
  orientedWithoutPermutation: "?",
  invisible: "X",
};

const centerIndices = {
  U: 0,
  L: 1,
  F: 2,
  R: 3,
  B: 4,
  D: 5,
};

const edgeIndices = {
  UF: 0,
  UR: 1,
  UB: 2,
  UL: 3,
  DF: 4,
  DR: 5,
  DB: 6,
  DL: 7,
  FR: 8,
  FL: 9,
  BR: 10,
  BL: 11,
};

const cornerIndices = {
  UFR: 0,
  UBR: 1,
  UBL: 2,
  UFL: 3,
  DFR: 4,
  DFL: 5,
  DBL: 6,
  DBR: 7,
};
