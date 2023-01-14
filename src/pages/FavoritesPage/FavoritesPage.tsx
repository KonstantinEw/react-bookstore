import { ArrowBackButton, FavoriteCard, SliderBooks, Title } from "components";
import { useEffect } from "react";
import {
  deleteFavorite,
  favoriteBooks,
  feachSearchBooks,
  getSearchBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { EmptyWrapper, StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorite } = useAppSelector(favoriteBooks);
  const { searchResults } = useAppSelector(getSearchBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favorite.length > 0) {
      const similarBook = favorite[0].title.slice(0, 4);
      dispatch(
        feachSearchBooks({
          searchValue: similarBook,
          page: "1",
        }),
      );
    }
  }, [dispatch, favorite]);

  return (
    <StyledFavoritesPage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      {favorite && favorite.length > 0 && (
        <SliderBooks books={searchResults.books} title="May be interesting for you" />
      )}
    </StyledFavoritesPage>
  );
};
