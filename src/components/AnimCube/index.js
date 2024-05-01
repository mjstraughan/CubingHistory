import { useEffect, useId, useRef } from "react";
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
  const divRef = useRef();
  useEffect(() => {

    // define global variables used for removing listeners

    if (typeof acjs_removeListeners == 'undefined')
      window.acjs_removeListeners = [];

    if (typeof gpath == 'undefined')
      window.gpath = location.pathname;

    // if new page then remove listeners from previous page

    if (gpath != location.pathname) {
      for(var i in acjs_removeListeners)
        acjs_removeListeners[i]();
      acjs_removeListeners = [];
      gpath = location.pathname;
    }

    AnimCube3(`id=${id}&${params}`);
    const canvas = divRef.current?.childNodes[0];
    if (canvas) {
      canvas.style.maxWidth = "100%";
    }
  }, [params]);

  return <div ref={divRef} style={{ width, height, maxWidth: "100%" }} id={id} />;
}
