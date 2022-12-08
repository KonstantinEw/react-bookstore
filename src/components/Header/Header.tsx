import { ReactComponent as LogoIcon } from "../../assets/icons/bookstore-logo.svg";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Search } from "../Search/Search";
import { LogoWrapper, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper href="/">
        <LogoIcon />
      </LogoWrapper>
      <Search type="search" placeholder="Search" />
      <HeaderNav />
    </StyledHeader>
  );
};
