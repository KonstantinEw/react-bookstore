import { BookDescription, Loader } from "components";
import { useEffect } from "react";
import { useParams } from "react-router";
import { feachGetBooks, getBook, useAppDispatch, useAppSelector } from "store";

export const GetBookPage = () => {
  const { isbn13 } = useParams();
  const { result, isLoading, error } = useAppSelector(getBook);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachGetBooks({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {result && <BookDescription book={result} />}
    </section>
  );
};
