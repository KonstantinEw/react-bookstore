import { useState } from "react";

import StarsRating from "react-star-rate";

export const StarsRaiting = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <StarsRating value={value} />
    </div>
  );
};
