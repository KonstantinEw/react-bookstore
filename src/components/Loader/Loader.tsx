import { Spinner, StyledLoader } from "./styles";

export const Loader = () => {
  return (
    <StyledLoader>
      <Spinner animate={{ rotate: 360 }} transition={{ repeat: 20, repeatType: "loop" }} />
    </StyledLoader>
  );
};
