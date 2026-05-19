import { useEffect, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

export default function useCountUp(target, active, duration = 2000) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(() =>
    prefersReducedMotion && active ? target : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    if (!active) {
      setValue(0);
      return;
    }

    let startTime = null;
    let rafId = 0;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, active, duration, prefersReducedMotion]);

  return value;
}
