import styled from "styled-components";
import { Color } from "ui";

export const StyledInput = styled.input`
  height: 56px;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.Gray};
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
  }
`;
