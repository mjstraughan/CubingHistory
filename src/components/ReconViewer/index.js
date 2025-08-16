import { TwistyAlgViewer, TwistyPlayer } from "cubing/twisty";
import { useEffect, useRef } from "react";
import styles from "./ReconViewer.module.css";

/**
 * Displays a reconstruction of a solve.
 * @example
 * <ReconViewer
    scramble="B R D2 F2 R F2 U D F2 R2 L2 D' U' R2 U2 F' L' B2 F R U2 R' B F U2"
    solution={`z2 y' . // Inspection
  R F R U' R . // Cross
  R' U2 R2 U R' . // First Pair
  d R U' R' U2 F' U' F . // Second Pair
  L' U' L2 U L' . // Third Pair
  U L' U L . // Fourth Pair
  y2 F R U R' U' F' . // OLL
  U y R B' R F2 R' B R F2 R2 . // PLL`}
  />
 */
export default function ReconViewer({ scramble, solution }) {
  const player = useRef(null);
  const playerContainer = useRef(null);
  const algViewer = useRef(null);
  const algViewerContainer = useRef(null);

  // Initial setup for the twisty player and alg viewer
  useEffect(() => {
    if (!playerContainer.current || !algViewerContainer.current) {
      return;
    }

    // Create the Twisty Player
    player.current = new TwistyPlayer({
      // Twisty Player settings
      background: "none",
      tempoScale: 1.5,
    });
    player.current.className = styles.twistyPlayer;

    // Create the Twisty Alg Viewer
    algViewer.current = new TwistyAlgViewer({ twistyPlayer: player.current });

    // Add the player and alg viewer to their containers
    playerContainer.current.appendChild(player.current);
    algViewerContainer.current.appendChild(algViewer.current);

    // Cleanup: when component unmounts, delete the player and alg viewer
    return () => {
      playerContainer.current?.replaceChildren();
      algViewerContainer.current?.replaceChildren();
    }
  }, []);

  // Update the player if scramble or solution changes
  useEffect(() => {
    if (!player.current) return;
    player.current.experimentalSetupAlg = scramble;
    player.current.alg = solution;
    player.current.jumpToStart();
  }, [scramble, solution]);

  return (
    <div className={styles.container}>
      <div ref={playerContainer} />
      <div className={styles.recon}>
        <strong>Scramble:</strong>
        <span>{scramble}</span>
        <strong>Solution:</strong>
        <div ref={algViewerContainer} />
      </div>
    </div>
  );
}
