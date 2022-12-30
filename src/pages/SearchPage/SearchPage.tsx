import { ArrowBackButton, BooksList, Loader } from "components";
import { PaginatedItems } from "components/Pagination/Pagination";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, getSearchBooks, feachSearchBooks, useAppDispatch } from "store";
import { Title, Total } from "./styles";

export const SearchPage = () => {
  const { page, searchValue } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      feachSearchBooks({
        searchValue: searchValue,
        page: page,
      }),
    );
  }, [searchValue, page, dispatch]);

  const { result, isLoading, error } = useAppSelector(getSearchBooks);
  const { books, total } = result;

  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {books && books.length === 0 && (
        <>
          <ArrowBackButton />
          <Title>no results</Title>
        </>
      )}
      {books && books.length > 0 && (
        <>
          <Title>{`'${searchValue}' search results`}</Title>
          <Total>{`Found ${total} books`}</Total>
          {<BooksList books={books} />}
          <PaginatedItems total={total} />
        </>
      )}
    </section>
  );
};
