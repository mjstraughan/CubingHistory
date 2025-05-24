import React, { CSSProperties } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Timeline = ({
  className, // Custom classes for the button
  style, // Custom styles for the button
  children, // Children elements
  variant, // for line color
}) => {
  const bgLineColor = variant ? styles[`timeline--${variant}`] : ""; // css integrate infima color

  return (
    <div
      className={clsx(styles.timeline, bgLineColor, className)}
      style={style}
    >
      {" "}
      {children}
    </div>
  );
};

export default Timeline;
