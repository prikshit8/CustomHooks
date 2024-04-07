import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [device, setDevice] = useState({
    mobile: false,
    tablet: false,
    computer: false,
  });

  const deviceCheck = () => {
    const width = window.innerWidth;
    const mobile = width <= 768;
    const tablet = width >= 768 && width <= 990;
    const computer = width >= 990;
    setDevice({ mobile, tablet, computer });
  };
  useEffect(() => {
    // first calculation
    deviceCheck();

    window.addEventListener("resize", deviceCheck);

    // cleanup
    return () => {
      window.removeEventListener("resize", deviceCheck);
    };
  }, []);
  return device;
};
