import styled from "styled-components";
import { B2, Color } from "../../ui";

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background: ${Color.Primary};
  ${B2}
  text-transform: uppercase;
  color: ${Color.Primary_Light};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background: ${Color.Primary_Light};
    color: ${Color.Primary};
    border: 2px solid ${Color.Primary};
  }
  &:active {
    transform: scale(0.9);
  }
`;
