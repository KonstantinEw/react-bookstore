import { BookDescription, Loader } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  addFavorite,
  addOrder,
  feachGetBooks,
  getBook,
  getUser,
  orderBooks,
  useAppDispatch,
  useAppSelector,
} from "store";

export const GetBookPage = () => {
  const { isbn13 } = useParams();
  const navigator = useNavigate();
  const { result, isLoading, error } = useAppSelector(getBook);
  const { isAuth } = useAppSelector(getUser);
  const { quantity } = useAppSelector(orderBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachGetBooks({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);
  const cartResult = { ...result, amount: 1 };

  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  };
  return (
    <section>
      <ScrollToTopOnMount />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {result && (
        <BookDescription
          navigator={navigator}
          isAuth={isAuth}
          quantity={quantity}
          addOrder={() => dispatch(addOrder(cartResult))}
          book={result}
          addFavoriteBook={() => dispatch(addFavorite(result))}
        />
      )}
    </section>
  );
};
