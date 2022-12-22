import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, B2, Color } from "ui";

const BodyForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 32px 32px 32px;
`;

const CustomLink = styled(Link)`
  margin-bottom: 40px;
  ${B1};
  color: ${Color.Primary};
  text-decoration: none;
`;

const ErrorMessage = styled.p`
  min-height: 15px;
  margin-bottom: 10px;
  color: ${Color.Red};
`;

const StyledInput = styled.input`
  height: 56px;
  margin-bottom: 5px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.Gray};
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
    text-transform: capitalize;
  }
`;

const Label = styled.label`
  padding-bottom: 10px;
  ${B2};
  color: ${Color.Primary};
  text-transform: uppercase;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { InputWrapper, Label, StyledInput, ErrorMessage, CustomLink, BodyForm };
