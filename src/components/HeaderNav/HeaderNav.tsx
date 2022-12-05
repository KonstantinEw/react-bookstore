import React from "react";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { StyledNav } from "./styles";

export const HeaderNav = () => {
  return (
    <StyledNav>
      <HeaderLink />
      <HeaderLink />
      <HeaderLink />
    </StyledNav>
  );
};
