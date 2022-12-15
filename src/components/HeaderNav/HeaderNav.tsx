import {
  StyledFavoriteIcon,
  StyledShopBagIcon,
  StyledUserProfileIcon,
} from "../../assets";
import { NavLink, ShopBagLink, StyledNav } from "./styles";

export const HeaderNav = () => {
  return (
    <StyledNav>
      <NavLink href="/">
        <StyledFavoriteIcon />
      </NavLink>
      <ShopBagLink href="/">
        <StyledShopBagIcon />
      </ShopBagLink>
      <NavLink href="/">
        <StyledUserProfileIcon />
      </NavLink>
    </StyledNav>
  );
};
