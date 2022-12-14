import styled from "styled-components";
import { B2, Color } from "ui";

export const StyledButton = styled.button<{
  buttonWidth?: string;
  buttonColor?: string;
  bgColor?: string;
  brColor?: string;
  margin?: string;
}>`
  width: ${({ buttonWidth }) => buttonWidth || "100%"};
  min-height: 60px;
  margin: ${({ margin }) => margin};
  background: ${({ bgColor }) => bgColor || Color.Primary};
  ${B2}
  text-transform: uppercase;
  color: ${({ buttonColor }) => buttonColor || Color.Primary_Light};
  border: ${({ brColor }) => `1px solid ${brColor}` || "none"};
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
  &:disabled {
    background-color: ${Color.Secondary};
    border: none;
  }
`;
