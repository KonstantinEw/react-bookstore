import { StyledLogoIcon } from "assets";
import { HeaderNav, BurgerMenu, MainSearch, Button } from "components";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { fetchSignOut, getUser, useAppDispatch, useAppSelector } from "store";
import { ErrorText, LogoLink, NavWrapper, StyledHeader } from "./styles";

export const Header = () => {
  const navigator = useNavigate();
  const [signOuterror, setSignOutError] = useState(false);
  const { error } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpenMenu = () => {
    setIsOpen((isOpen) => (isOpen === false ? true : false));
  };
  const handleLogOut = () => {
    dispatch(fetchSignOut())
      .unwrap()
      .then(() => {
        navigator(ROUTE.HOME);
      })
      .catch(() => {
        setSignOutError(true);
      });
  };
  return (
    <StyledHeader isOpen={isOpen}>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <NavWrapper isOpen={isOpen}>
        <MainSearch />
        <HeaderNav />
        {width < 993 && <Button onClick={handleLogOut}>log out</Button>}
      </NavWrapper>
      {width < 993 && (
        <>
          <BurgerMenu toggleOpenMenu={handleToggleOpenMenu} />
          {signOuterror && <ErrorText>{error}</ErrorText>}
        </>
      )}
    </StyledHeader>
  );
};
