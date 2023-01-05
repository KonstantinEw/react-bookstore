import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((v) => !v);
  };

  return [value, toggleValue];
};
