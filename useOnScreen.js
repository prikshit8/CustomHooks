import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    {
      threshold: 1.0,
    }
  );
  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isVisible;
};
