import { useCallback, useRef } from "react";

export const useThrottle = (fn, freeze) => {
  const shallItRun = useRef(true);
  const throttledFn = useCallback(
    (...args) => {
      if (shallItRun.current) {
        fn(...args);
        shallItRun.current = false;
        setTimeout(() => {
          shallItRun.current = true;
        }, freeze);
      }
    },
    [fn, freeze]
  );

  return throttledFn;
};
