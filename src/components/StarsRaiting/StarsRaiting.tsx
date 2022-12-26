import { useState } from "react";
import StarsRating from "react-star-rate";

export const StarsRaiting = () => {
  const [star] = useState(0);
  return (
    <div>
      <StarsRating value={star} />
    </div>
  );
};
