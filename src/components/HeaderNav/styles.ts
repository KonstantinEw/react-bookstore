import styled from "styled-components";
import { Media } from "../../ui";

export const StyledNav = styled.nav`
  display: flex;
  gap: 45px;
  align-self: center;
  padding: 14px 0px 14px 0px;
`;

export const NavLink = styled.a`
  align-self: center;
  ${Media.LG} {
    display: none;
  }
`;

export const ShopBagLink = styled.a`
  align-self: center;
`;
