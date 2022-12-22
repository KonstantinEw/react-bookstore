import { useState } from "react";

import StarsRating from "react-star-rate";

export const StarsRaiting = () => {
  const [value] = useState(0);
  return (
    <div>
      <StarsRating value={value} />
    </div>
  );
};
