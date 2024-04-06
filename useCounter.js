import { useState } from "react";

export const useCounter = (initialValue = 0, stepValue = 1) => {
  const [count, setCount] = useState(initialValue);
  const reset = () => {
    setCount(initialValue);
  };
  const increment = () => {
    setCount(count + stepValue);
  };
  const decrement = () => {
    setCount(count - stepValue);
  };
  return { reset, increment, decrement, count };
};
