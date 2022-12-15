import styled from "styled-components";
import {
  FavoriteIcon,
  LogoIcon,
  SearchIcon,
  ShopBagIcon,
  UserProfileIcon,
} from ".";
import { Color } from "../ui";

export const StyledFavoriteIcon = styled(FavoriteIcon)`
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
  & path {
    stroke: ${Color.Primary};
  }
`;
