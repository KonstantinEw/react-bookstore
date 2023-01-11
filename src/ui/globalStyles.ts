import { createGlobalStyle } from "styled-components";
import { Color, resetCSS } from "ui";
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
  background-color: ${Color.Primary_Light};
}
`;
