import styled from "styled-components";
import { B1, Color, Media } from "../../ui";

export const StyledSearch = styled.input`
  width: 50%;
  height: 56px;
  padding: 15px 20px 15px 20px;
  border: 1px solid ${Color.Gray};
  background-color: ${Color.Light};
  ${B1}
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
  }
  ${Media.LG} {
    display: none;
  }
`;
