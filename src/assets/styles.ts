import styled from "styled-components";
import {
  AddFavoriteIcon,
  ArrowIcon,
  FavoriteIcon,
  LogoIcon,
  NextButton,
  PrevButton,
  SearchIcon,
  ShopBagIcon,
  UserProfileIcon,
} from "assets";
import { Color } from "ui";

const StyledFavoriteIcon = styled(FavoriteIcon)`
  & path {
    stroke: ${Color.Primary};
  }
`;

const StyledShopBagIcon = styled(ShopBagIcon)`
  & path {
    stroke: ${Color.Primary};
  }
`;

const StyledUserProfileIcon = styled(UserProfileIcon)`
  & path {
    stroke: ${Color.Primary};
  }
`;

const StyledLogoIcon = styled(LogoIcon)`
  & path {
    stroke: ${Color.Primary};
    fill: ${Color.Primary};
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  & path {
    stroke: ${Color.Primary};
  }
`;

const StyledArrow = styled(ArrowIcon)`
  & path {
    fill: ${Color.Primary};
  }
`;

const StyledNextButton = styled(NextButton)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.Secondary};
  }
`;

const StyledPrevButton = styled(PrevButton)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.Secondary};
  }
`;

const StyledAddFavoriteIcon = styled(AddFavoriteIcon)`
  cursor: pointer;
  & path:hover {
    stroke: ${Color.Red};
    fill: ${Color.Red};
  }
`;

export {
  StyledFavoriteIcon,
  StyledShopBagIcon,
  StyledUserProfileIcon,
  StyledLogoIcon,
  StyledAddFavoriteIcon,
  StyledPrevButton,
  StyledNextButton,
  StyledArrow,
  StyledSearchIcon,
};
