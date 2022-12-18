import { ArrowBack, FavoriteCard, Title } from "components";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <ArrowBack />
      <Title>favorites</Title>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </StyledFavoritesPage>
  );
};
