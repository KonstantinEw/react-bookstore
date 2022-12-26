import { StyledLogoIcon, StyledSearchIcon } from "assets";
import { HeaderNav, ThemeToggler } from "components";
import { useInput } from "hooks";
import { useEffect, useState } from "react";
import { ROUTE } from "router";
import { useAppDispatch, feachSearchBooks } from "store";
import { InputWrapper, LogoLink, Search, SearchLink, StyledHeader } from "./styles";

export const Header = () => {
  const { value, onChange } = useInput();

  const [params, setParams] = useState({
    searchValue: value,
    page: "",
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [params, dispatch]);

  const handleParams = () => {
    setParams({ searchValue: value, page: "1" });
  };

  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <InputWrapper>
        <Search placeholder="Search" onChange={onChange} value={value} />
        <SearchLink to={ROUTE.SEARCH} onClick={handleParams}>
          <StyledSearchIcon />
        </SearchLink>
      </InputWrapper>
      <ThemeToggler type="checkbox" />
      <HeaderNav />
    </StyledHeader>
  );
};
