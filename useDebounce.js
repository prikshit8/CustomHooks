import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay) => {
  const id = useRef(null);
  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(id.current);
      id.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [delay, fn]
  );
  return debouncedFn;
};
