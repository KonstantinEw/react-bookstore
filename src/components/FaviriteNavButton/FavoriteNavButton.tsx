import { StyledFavoriteActiveIcon, StyledFavoriteIcon } from "assets";
import { favoriteBooks, useAppSelector } from "store";

export const FavoriteNavButton = () => {
  const { favorite } = useAppSelector(favoriteBooks);
  return <>{favorite.length > 0 ? <StyledFavoriteActiveIcon /> : <StyledFavoriteIcon />}</>;
};
