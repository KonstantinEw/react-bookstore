import {
  StyledFavoriteIcon,
  StyledSearchIcon,
  StyledShopBagIcon,
  StyledUserProfileIcon,
} from "assets";
import { ROUTE } from "router";
import { ShopBagLink, StyledNav, StyledNavLink } from "./styles";

export const HeaderNav = () => {
  return (
    <StyledNav>
      <StyledNavLink to={ROUTE.SEARCH}>
        <StyledSearchIcon />
      </StyledNavLink>
      <StyledNavLink to={ROUTE.FAVORITES}>
        <StyledFavoriteIcon />
      </StyledNavLink>
      <ShopBagLink to={ROUTE.SHOP_BAG}>
        <StyledShopBagIcon />
      </ShopBagLink>
      <StyledNavLink to={ROUTE.PROFILE}>
        <StyledUserProfileIcon />
      </StyledNavLink>
    </StyledNav>
  );
};
