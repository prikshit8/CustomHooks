import { useState } from "react";

const isBrowser = typeof window !== "undefined";

export const useLocalStorage = (key, initialValue) => {
  if (!isBrowser) {
    return [key, () => {}, () => {}];
  }
  if (!key) {
    throw new Error(`key can not be falsy`);
  }
  const initialComputedValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;

  const [value, setValue] = useState(initialComputedValue);

  const set = (newValue) => {
    const finalValue = newValue instanceof Function ? newValue(value) : value;
    setValue(finalValue);
    localStorage.setItem(key, JSON.stringify(finalValue));
  };
  const remove = () => {
    localStorage.removeItem(key);
    setValue(null);
  };
  return [key, set, remove];
};
