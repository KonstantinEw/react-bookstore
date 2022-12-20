import { BooksList, Subscribe, Title } from "components";
import { useEffect } from "react";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";

export const NewBooksPage = () => {
  const { isLoading, result, error } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);
  return (
    <section>
      {isLoading ? (
        <Title>Loading....</Title>
      ) : (
        <>
          <Title>New Releases Books</Title>
          <BooksList responseBooks={result} />
          <Subscribe />
        </>
      )}
    </section>
  );
};
