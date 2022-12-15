import styled from "styled-components";
import { Color } from "../../ui";

export const StyledThemeToggler = styled.input`
  position: relative;
  display: block;
  width: 62px;
  height: 32px;
  margin: 13px 0px 0px 0px;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  appearance: none;
  cursor: pointer;
  background: ${Color.Gray};
  transition: background-color ease 0.3s;
  &::before {
    content: url("https://shivanarrthine.com/public/images/icons/sun.svg");
    position: absolute;
    left: 4px;
    top: 4px;
    display: block;
    z-index: 2;
    width: 24px;
    height: 24px;
    background: ${Color.Primary_Light};
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
