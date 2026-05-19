import useCountUp from "../hooks/useCountUp";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export function NumericStat({ target, suffix = "", active }) {
  const count = useCountUp(target, active);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function OperationsStat({ active }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const count = useCountUp(24, active);

  if (prefersReducedMotion) {
    return <>24/7</>;
  }

  return <>{count >= 24 ? "24/7" : `${count}/7`}</>;
}
