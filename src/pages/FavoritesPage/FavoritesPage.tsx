import { ArrowBackButton, FavoriteCard, Title } from "components";
import { deleteFavorite, favoriteBooks, useAppDispatch, useAppSelector } from "store";
import { EmptyWrapper, StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorite } = useAppSelector(favoriteBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledFavoritesPage>
      <ArrowBackButton />
      <Title>favorites</Title>
      {favorite.length > 0 ? (
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
      ) : (
        <EmptyWrapper>Favorite list is empty</EmptyWrapper>
      )}
    </StyledFavoritesPage>
  );
};
