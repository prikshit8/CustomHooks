import { useEffect, useState } from "react";

export const useHasFocus = () => {
  const [isInFocus, setIsInFocus] = useState(document.hasFocus());

  useEffect(() => {
    const focusHandler = () => {
      setIsInFocus(true);
    };
    const blurHandler = () => {
      setIsInFocus(false);
    };
    window.addEventListener("focus", focusHandler);
    window.addEventListener("blur", blurHandler);

    return () => {
      window.removeEventListener("focus", focusHandler);
      window.removeEventListener("blur", blurHandler);
    };
  }, []);

  return isInFocus;
};
