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
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpenMenu = () => {
    setIsOpen((isOpen) => (isOpen === true ? false : true));
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const handleLogOut = () => {
    dispatch(fetchSignOut())
      .unwrap()
      .then(() => {
        setIsOpen(false);
        navigator(ROUTE.HOME);
      })
      .catch(() => {
        setSignOutError(true);
      });
  };

  const blockBody = (isOpen: boolean) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <StyledHeader isOpen={isOpen}>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <NavWrapper isOpen={isOpen}>
        <MainSearch />
        <HeaderNav handleCloseMenu={handleCloseMenu} />
        {width < 993 && <Button onClick={handleLogOut}>log out</Button>}
      </NavWrapper>
      {width < 993 && (
        <>
          <BurgerMenu blockBody={blockBody} isOpen={isOpen} toggleOpenMenu={handleToggleOpenMenu} />
          {signOuterror && <ErrorText>{error}</ErrorText>}
        </>
      )}
    </StyledHeader>
  );
};
