import { css } from "styled-components";
import { Color } from "./colors";

const H1 = css`
  font-family: Bebas Neue;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  color: ${Color.Primary};
  @media (max-width: 320px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  color: ${Color.Primary};
  @media (max-width: 320px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  color: ${Color.Primary};
`;

const S1 = css`
  font-family: Bebas Neue;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

const B1 = css`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
`;

const B2 = css`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
`;

export { H1, H2, H3, S1, B1, B2 };
