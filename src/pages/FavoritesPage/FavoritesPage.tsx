import { ArrowBackButton, FavoriteCard, Title } from "components";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <ArrowBackButton />
      <Title>favorites</Title>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </StyledFavoritesPage>
  );
};
