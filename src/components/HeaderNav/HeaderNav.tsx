import { FavoriteIcon, ShopBagIcon, UserProfileIcon } from "../../assets";
import { NavLink, ShopBagLink, StyledNav } from "./styles";

export const HeaderNav = () => {
  return (
    <StyledNav>
      <NavLink href="/">
        <FavoriteIcon />
      </NavLink>
      <ShopBagLink href="/">
        <ShopBagIcon />
      </ShopBagLink>
      <NavLink href="/">
        <UserProfileIcon />
      </NavLink>
    </StyledNav>
  );
};
