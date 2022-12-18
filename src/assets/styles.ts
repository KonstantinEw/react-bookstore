import styled from "styled-components";
import { Arrow, FavoriteIcon, LogoIcon, SearchIcon, ShopBagIcon, UserProfileIcon } from ".";
import { Color, Media } from "ui";

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${Media.LG} {
    display: none;
  }
  & path {
    stroke: ${Color.Primary};
  }
`;

export const StyledShopBagIcon = styled(ShopBagIcon)`
  & path {
    stroke: ${Color.Primary};
  }
`;

export const StyledUserProfileIcon = styled(UserProfileIcon)`
  ${Media.LG} {
    display: none;
  }
  & path {
    stroke: ${Color.Primary};
  }
`;

export const StyledLogoIcon = styled(LogoIcon)`
  & path {
    stroke: ${Color.Primary};
    fill: ${Color.Primary};
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  ${Media.LG} {
    display: none;
  }
  & path {
    stroke: ${Color.Primary};
  }
`;

export const StyledArrow = styled(Arrow)`
  & path {
    fill: ${Color.Primary};
  }
`;
