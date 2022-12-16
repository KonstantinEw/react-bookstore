import { StyledLogoIcon } from "assets";
import { HeaderNav, Search, ThemeToggler } from "components";
import { useInput } from "hooks";
import { ROUTE } from "router";
import { LogoLink, StyledHeader } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <Search {...search} type="search" placeholder="Search" />
      <ThemeToggler type="checkbox" />
      <HeaderNav />
    </StyledHeader>
  );
};
