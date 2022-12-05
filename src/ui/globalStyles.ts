import styled, { createGlobalStyle } from "styled-components";
import { Media } from "./media";
import { resetCSS } from "./resetCSS";
import { DarkTheme, LightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${resetCSS}

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital@0;1&display=swap');

html[theme="dark"]{
    ${DarkTheme}
}
html[theme="light"]{
    ${LightTheme}
}
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 40px 0px 40px;
  ${Media.EL} {
    max-width: 1000px;
  }
  ${Media.LG} {
    max-width: 750px;
  }
  ${Media.MD} {
    max-width: none;
    padding: 0px 25px 0px 25px;
  }
`;
