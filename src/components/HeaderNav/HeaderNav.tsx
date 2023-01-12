import { StyledUserProfileIcon } from "assets";
import { FavoriteNavButton, OrderNavButton } from "components";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { StyledNav, StyledNavLink, TextLink } from "./styles";

interface IProps {
  handleCloseMenu: () => void;
}

export const HeaderNav = ({ handleCloseMenu }: IProps) => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledNav>
      <StyledNavLink to={ROUTE.FAVORITES}>
        {width < 993 ? (
          <TextLink onClick={handleCloseMenu}>Favorite</TextLink>
        ) : (
          <FavoriteNavButton />
        )}
      </StyledNavLink>
      <StyledNavLink to={ROUTE.SHOP_BAG}>
        {width < 993 ? <TextLink onClick={handleCloseMenu}>Cart</TextLink> : <OrderNavButton />}
      </StyledNavLink>
      <StyledNavLink to={ROUTE.PROFILE}>
        {width < 993 ? (
          <TextLink onClick={handleCloseMenu}>Profile</TextLink>
        ) : (
          <StyledUserProfileIcon />
        )}
      </StyledNavLink>
    </StyledNav>
  );
};
