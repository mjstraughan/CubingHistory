import { TwistyAlgViewer, TwistyPlayer } from "cubing/twisty";
import { useEffect, useRef, useState } from "react";
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
export default function ReconViewer({ puzzle, scramble, solution }) {
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
      puzzle: puzzle,
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
    };
  }, [puzzle]);

  // Update the player if scramble or solution changes
  useEffect(() => {
    if (!player.current) return;
    player.current.experimentalSetupAlg = scramble;
    player.current.alg = solution;
    player.current.jumpToStart();
  }, [scramble, solution]);

  return (
    <div className={styles.container}>
      <div ref={playerContainer} style={{ position: "relative" }}>
        {/* Temporary workaround to make twisty player playback controls legible in dark mode */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "32px",
            backgroundColor: "grey",
          }}
        />
      </div>
      <ScrollContainerWithGradient>
        <div className={styles.recon}>
          <strong>Scramble:</strong>
          <span>{scramble}</span>
          <strong>Solution:</strong>
          <div ref={algViewerContainer} />
        </div>
      </ScrollContainerWithGradient>
    </div>
  );
}

function ScrollContainerWithGradient({ children }) {
  const scrollRef = useRef(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;

    setShowTopGradient(!atTop);
    setShowBottomGradient(!atBottom);
  };

  // Run on mount to set initial state
  useEffect(() => {
    // Delay is necessary because `<twisty-alg-viewer>` needs time to load
    setTimeout(handleScroll, 50);
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div
        className={[styles.gradient, styles.gradientTop].join(" ")}
        style={{ opacity: showTopGradient ? 1 : 0 }}
      />
      <div
        className={[styles.gradient, styles.gradientBottom].join(" ")}
        style={{ opacity: showBottomGradient ? 1 : 0 }}
      />

      <div
        className={styles.scrollContent}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {children}
      </div>
    </div>
  );
}
