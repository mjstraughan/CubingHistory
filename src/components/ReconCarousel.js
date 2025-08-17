import { useState, useEffect, useRef } from "react";

export default function ReconCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef([]);

  const total = children.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // measure the tallest ReconViewer
  useEffect(() => {
    if (refs.current.length > 0) {
      const heights = refs.current.map((el) => el?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [children]);

  return (
    <div style={{ width: "100%" }}>
      {/* Buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <button
          onClick={prev}
          style={{
            padding: "0.25rem 1.5rem",
            fontSize: "1.25rem",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          ⬅
        </button>
        <button
          onClick={next}
          style={{
            padding: "0.25rem 1.5rem",
            fontSize: "1.25rem",
            cursor: "pointer",
          }}
        >
          ➡
        </button>
      </div>

      {/* Current solve label */}
      <div style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Solve {currentIndex + 1}
      </div>

      {/* Fixed-height container */}
      <div
        style={{
          width: "100%",
          minHeight: maxHeight || "auto", // lock to tallest
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // stick to top
          position: "relative",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            style={{
              display: index === currentIndex ? "block" : "none",
              width: "100%",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
