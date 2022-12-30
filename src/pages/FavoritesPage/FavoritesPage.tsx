import { ArrowBackButton, FavoriteCard, Title } from "components";
import { deleteFavorite, favoriteBooks, useAppDispatch, useAppSelector } from "store";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorite } = useAppSelector(favoriteBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledFavoritesPage>
      <ArrowBackButton />
      <Title>favorites</Title>
      <ul>
        {favorite.map((book) => {
          return (
            <FavoriteCard
              key={book.isbn13}
              book={book}
              deleteFavoriteBook={() => dispatch(deleteFavorite(book.isbn13))}
            />
          );
        })}
      </ul>
    </StyledFavoritesPage>
  );
};
