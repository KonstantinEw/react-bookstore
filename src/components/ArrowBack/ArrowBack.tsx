import { StyledArrow } from "assets";
import { ROUTE } from "router";
import { CustomLink } from "./styles";

export const ArrowBack = () => {
  return (
    <CustomLink to={ROUTE.HOME}>
      <StyledArrow />
    </CustomLink>
  );
};
