import { useEffect, useId } from "react";
import AnimCube3 from "./AnimCube3";

/**
 * Embeds an AnimCube visualizer as a React component.
 * Documentation for parameters: https://animcubejs.cubing.net/animcubejs.html#usage
 * @author err0rcuber
 * @example
 * <AnimCube params="move=RUR'URU2R'U2&initrevmove=#" width="400px" height="300px"/>
 */
export default function AnimCube({
  params,
  width = "200px",
  height = "219px",
}) {
  const id = "animcube_" + useId();
  useEffect(() => {
    AnimCube3(`id=${id}&${params}`);
  }, [params]);

  return <div style={{ width, height }} id={id} />;
}
