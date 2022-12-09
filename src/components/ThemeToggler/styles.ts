import styled from "styled-components";
import { Color } from "../../ui";

export const StyledThemeToggler = styled.input`
  appearance: none;
  width: 62px;
  height: 32px;
  display: block;
  position: relative;
  margin: 13px 0px 0px 0px;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${Color.Gray};
  transition: background-color ease 0.3s;
  &::before {
    content: url("https://shivanarrthine.com/public/images/icons/sun.svg");
    display: block;
    position: absolute;
    z-index: 2;
    width: 24px;
    height: 24px;
    background: ${Color.Primary_Light};
    left: 4px;
    top: 4px;
    border-radius: 50%;
    text-indent: 4px;
    line-height: 32px;
    word-spacing: 37px;
    color: #fff;
    white-space: nowrap;
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }
  &:checked {
    background-color: ${Color.White};
    border-color: ${Color.White};
    &::before {
      left: 32px;
      content: url("https://shivanarrthine.com/public/images/icons/moon.svg");
      background: ${Color.Primary_Light};
    }
  }
`;
