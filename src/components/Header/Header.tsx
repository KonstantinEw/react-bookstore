import { StyledLogoIcon, StyledSearchIcon } from "assets";
import { HeaderNav, ThemeToggler } from "components";
import { useInput } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { InputWrapper, LogoLink, Search, SearchButton, StyledHeader } from "./styles";

export const Header = () => {
  const navigator = useNavigate();
  const handleSearch = () => {
    navigator(`search/${value}/1`);
  };
  const { value, onChange } = useInput();
  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <InputWrapper>
        <Search placeholder="Search" onChange={onChange} value={value} />
        <SearchButton onClick={handleSearch}>
          <StyledSearchIcon />
        </SearchButton>
      </InputWrapper>
      <ThemeToggler type="checkbox" />
      <HeaderNav />
    </StyledHeader>
  );
};
