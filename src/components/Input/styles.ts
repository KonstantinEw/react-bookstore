import styled from "styled-components";
import { B2, Color } from "ui";

export const StyledInput = styled.input`
  height: 56px;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.Gray};
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
    text-transform: capitalize;
  }
`;

export const Label = styled.label`
  padding-bottom: 10px;
  ${B2};
  color: ${Color.Primary};
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
