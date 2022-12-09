import { HeaderNav, Search, ThemeToggler } from "..";
import { LogoIcon } from "../../assets";
import { useInput } from "../../hooks";
import { LogoWrapper, StyledHeader } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <LogoWrapper href="/">
        <LogoIcon />
      </LogoWrapper>
      <Search {...search} type="search" placeholder="Search" />
      <ThemeToggler type="checkbox" />
      <HeaderNav />
    </StyledHeader>
  );
};
