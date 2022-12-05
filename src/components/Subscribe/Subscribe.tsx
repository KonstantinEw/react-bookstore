import {
  StyledForm,
  StyledInputField,
  StyledSubscribe,
  StyledSubTitle,
  StyledTitle,
} from "./styles";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <StyledTitle>Subscribe to Newsletter</StyledTitle>
      <StyledSubTitle>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </StyledSubTitle>
      <StyledForm>
        <StyledInputField type="email" />
        <input type="submit" />
      </StyledForm>
    </StyledSubscribe>
  );
};
