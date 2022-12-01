import { createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";

const GlobalStyles = createGlobalStyle`
html[theme="dark"]{
    ${DarkTheme}
}
html[theme="light"]{
    ${LightTheme}
}
`;
