import { css } from "styled-components";

const DarkTheme = css`
  --primary: #ffffff;
  --primary-bg: #313037;
  --subs-bg: #313037;
  --secondary-input: #f7f7f7;
`;

const LightTheme = css`
  --primary: #313037;
  --primary-bg: #ffffff;
  --subs-bg: #f4eefd;
  --secondary-input: #ffffff;
`;

export { DarkTheme, LightTheme };
