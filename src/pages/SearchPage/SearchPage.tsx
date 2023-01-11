import { StyledNextButton, StyledPrevButton } from "assets";
import { ArrowBackButton, BooksList, Loader } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppSelector, getSearchBooks, feachSearchBooks, useAppDispatch } from "store";
import { StyledPagination, Title, Total } from "./styles";

export const SearchPage = () => {
  const { results, isLoading, error } = useAppSelector(getSearchBooks);
  const dispatch = useAppDispatch();
  const { books, total } = results;
  const { page, searchValue } = useParams<string>();

  const pages = Math.ceil(+total / 10);
  const [itemOffset, setItemOffset] = useState(page);
  const handleSetPage = (event: { selected: number }) => {
    const newOffset = event.selected;
    if (newOffset) {
      setItemOffset(newOffset + "");
    }
  };

  useEffect(() => {
    dispatch(
      feachSearchBooks({
        searchValue: searchValue,
        page: itemOffset,
      }),
    );
  }, [searchValue, itemOffset, page, dispatch]);

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
          <StyledPagination
            breakLabel="..."
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName="paginaton__container"
            breakClassName="paginaton__break"
            pageClassName="paginaton__page"
            activeClassName="paginaton__active"
            previousClassName="paginaton__previous"
            nextClassName="paginaton__next"
            disabledClassName="paginaton__disabled"
            nextLabel={<StyledNextButton />}
            previousLabel={<StyledPrevButton />}
            pageCount={pages}
            className="paginaton"
            onPageChange={handleSetPage}
          />
        </>
      )}
    </section>
  );
};
