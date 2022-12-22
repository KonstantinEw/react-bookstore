import { StyledArrow } from "assets";
import { useNavigate } from "react-router";
import { Button } from "./styles";

export const ArrowBackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleBack}>
      <StyledArrow />
    </Button>
  );
};
