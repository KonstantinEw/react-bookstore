import { NavLink, ShopBagLink, StyledNav } from "./styles";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/nav-favorite.svg";
import { ReactComponent as ShopBagIcon } from "../../assets/icons/nav-shopping-bag.svg";
import { ReactComponent as UserProfileIcon } from "../../assets/icons/nav-user-profile.svg";

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
