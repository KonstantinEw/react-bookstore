import styled from "styled-components";
import {
  ArrowIcon,
  FavoriteIcon,
  LogoIcon,
  NextButton,
  PrevButton,
  SearchIcon,
  ShopBagIcon,
  UserProfileIcon,
} from "assets";
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

export const StyledArrow = styled(ArrowIcon)`
  & path {
    fill: ${Color.Primary};
  }
`;

export const StyledNextButton = styled(NextButton)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.Secondary};
  }
`;

export const StyledPrevButton = styled(PrevButton)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.Secondary};
  }
`;
