import React from "react";
import { useSpring, a } from "@react-spring/web";
import { useState } from "react";
import styles from "./styles.module.css";

function Fatayer({ bakeFatayer }) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: { mass: 15, tension: 800, friction: 80 },
  });

  // Nearly all this code is for CSS effects on the clickable fatayer
  return (
    <div className="scale-150 hover:scale-[2.0] transition-all">
      <span
        className="grid grid-rows-2 grid-cols-2 animate-gelatine"
        onClick={() => {
          set((state) => !state);
          bakeFatayer();
        }}
      >
        <div className={styles.container}>
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          />
          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          />
        </div>
      </span>
    </div>
  );
}

export default Fatayer;
