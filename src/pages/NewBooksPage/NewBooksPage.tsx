import { BooksList, Loader, Subscribe, Title } from "components";
import { useEffect } from "react";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { StyledNewBooksPage } from "./styles";

export const NewBooksPage = () => {
  const { isLoading, results, error } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledNewBooksPage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {results.books && results.books.length > 0 && (
        <>
          <Title>New Releases Books</Title>
          <BooksList books={results.books} />
          <Subscribe />
        </>
      )}
    </StyledNewBooksPage>
  );
};
