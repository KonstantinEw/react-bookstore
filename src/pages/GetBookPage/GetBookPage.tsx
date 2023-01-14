import { BookDescription, Loader, SliderBooks, Subscribe } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  addFavorite,
  addOrder,
  feachGetBooks,
  feachSearchBooks,
  getBook,
  getSearchBooks,
  getUser,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledBookPage } from "./styles";

export const GetBookPage = () => {
  const { isbn13 } = useParams();
  const navigator = useNavigate();
  const { result, isLoading, error } = useAppSelector(getBook);
  const { searchResults } = useAppSelector(getSearchBooks);
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(feachGetBooks({ isbn13: isbn13 }));
  }, [dispatch, isbn13, result.title]);
  const cartResult = { ...result, amount: 1 };

  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  };

  useEffect(() => {
    if (result.title) {
      const similarBook = result.title.slice(0, 4);
      dispatch(
        feachSearchBooks({
          searchValue: similarBook,
          page: "1",
        }),
      );
    }
  }, [dispatch, result.title]);
  return (
    <StyledBookPage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollToTopOnMount />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {result && (
        <BookDescription
          navigator={navigator}
          isAuth={isAuth}
          addOrder={() => dispatch(addOrder(cartResult))}
          book={result}
          addFavoriteBook={() => dispatch(addFavorite(result))}
        />
      )}
      <Subscribe />
      <SliderBooks title="Similar books" books={searchResults.books} />
    </StyledBookPage>
  );
};
