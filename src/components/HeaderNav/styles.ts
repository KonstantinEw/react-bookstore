import { CustomNavLink } from "components/CustomNavLink/CustomNavLink";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const StyledNav = styled.nav`
  display: flex;
  gap: 45px;
  align-self: center;
  padding: 14px 0px 14px 0px;
  ${Media.LG} {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(CustomNavLink)`
  align-self: center;
`;

const TextLink = styled.p`
  ${H3};
  color: ${Color.Primary};
  text-transform: uppercase;
`;

export { StyledNavLink, StyledNav, TextLink };
