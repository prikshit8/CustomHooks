import { useEffect, useRef } from "react";

const areEqual = (prevDeps, newDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== newDeps.length) return false;
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== newDeps[i]) {
      return false;
    }
  }
  return true;
};

export const useMemoPolyfill = (callback, deps) => {
  const memoizedRef = useRef(null);

  // 1st condition will check if this is first computation
  // 2nd condition will be check on subsequent renders => if deps array is changed
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: callback(),
      deps,
    };
  }
  //   memory cleanup
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  return memoizedRef.current.value;
};
