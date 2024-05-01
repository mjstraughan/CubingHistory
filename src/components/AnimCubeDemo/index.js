import { useEffect, useId, useRef } from "react";
import AnimCube3 from "./AnimCube3";

/**
 * Embeds an AnimCube visualizer as a React component.
 * Documentation for parameters: https://animcubejs.cubing.net/animcubejs.html#usage
 * @author err0rcuber
 * @example
 * <AnimCube params="move=RUR'URU2R'U2&initrevmove=#" width="400px" height="300px"/>
 */
export default function AnimCubeDemo({
  params,
  facelets,
  width = "200px",
  height = "219px",
}) {
  const id = "animcube_" + useId();
  const divRef = useRef();
  useEffect(() => {
    if (typeof acjs_removeListeners == 'undefined')
      window.acjs_removeListeners = [];
    var n = 0;
    var arr = facelets.split(',');
    var p = `id=${id}&${params}`;
    demo();
    function demo() {
      if (acjs_removeListeners[id])
        acjs_removeListeners[id]();
      AnimCube3(`${p}&facelets=${arr[n++%arr.length]}`);
      if (n < 3*arr.length)      // # of iterations
        setTimeout(demo, 1000);  // delay in milliseconds
    }
    const canvas = divRef.current?.childNodes[0];
    if (canvas) {
      canvas.style.maxWidth = "100%";
    }
  }, [params]);

  return <div ref={divRef} style={{ width, height, maxWidth: "100%" }} id={id} />;
}
