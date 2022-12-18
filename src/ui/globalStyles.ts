import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";
import { resetCSS } from "./resetCSS";
import { DarkTheme, LightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${resetCSS};

html[theme="dark"]{
    ${DarkTheme}
}
html[theme="light"]{
    ${LightTheme}
}

body {
  min-height: 100%;
  background-color: ${Color.Primary_Light};
}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 0px 40px 0px 40px;
  background-color: ${Color.Primary_Light};
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
  ${Media.SM} {
  }
`;
