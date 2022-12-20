import { CustomNavLink } from "components";
import styled from "styled-components";
import { Media } from "ui";

const StyledNav = styled.nav`
  display: flex;
  gap: 45px;
  align-self: center;
  padding: 14px 0px 14px 0px;
`;

const StyledNavLink = styled(CustomNavLink)`
  align-self: center;
  ${Media.LG} {
    display: none;
  }
`;

const ShopBagLink = styled(CustomNavLink)`
  align-self: center;
`;

export { ShopBagLink, StyledNavLink, StyledNav };
