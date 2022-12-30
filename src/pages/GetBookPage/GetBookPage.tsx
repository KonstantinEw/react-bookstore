import { BookDescription, Loader } from "components";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  addFavorite,
  addOrder,
  feachGetBooks,
  getBook,
  orderBooks,
  useAppDispatch,
  useAppSelector,
} from "store";

export const GetBookPage = () => {
  const { isbn13 } = useParams();
  const { result, isLoading, error } = useAppSelector(getBook);
  const { quantity } = useAppSelector(orderBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachGetBooks({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {result && (
        <BookDescription
          quantity={quantity}
          addOrder={() => dispatch(addOrder(result))}
          book={result}
          addFavoriteBook={() => dispatch(addFavorite(result))}
        />
      )}
    </section>
  );
};
