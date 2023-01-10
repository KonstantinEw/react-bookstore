import { StyledLogoIcon } from "assets";
import { HeaderNav, BurgerMenu, MainSearch, Button } from "components";
import { getAuth, signOut } from "firebase/auth";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { LogoLink, NavWrapper, StyledHeader } from "./styles";

export const Header = () => {
  const auth = getAuth();
  const navigator = useNavigate();
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpenMenu = () => {
    setIsOpen((isOpen) => (isOpen === false ? true : false));
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigator(ROUTE.HOME);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </LogoLink>
      <NavWrapper isOpen={isOpen}>
        <MainSearch />
        <HeaderNav />
        {width < 993 && <Button onClick={handleLogOut}>log out</Button>}
      </NavWrapper>
      {width < 993 && <BurgerMenu toggleOpenMenu={handleToggleOpenMenu} />}
    </StyledHeader>
  );
};
