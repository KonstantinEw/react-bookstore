import { StyledNextButton, StyledPrevButton } from "assets";
import { ArrowBackButton, BooksList, Loader } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector, getSearchBooks, feachSearchBooks, useAppDispatch } from "store";
import { StyledPagination, StyledSearchPage, Title, Total } from "./styles";

export const SearchPage = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { page, searchValue } = useParams();
  const { searchResults, isLoading, error } = useAppSelector(getSearchBooks);

  const { books, total } = searchResults;
  const pages = Math.ceil(+total / 10);

  useEffect(() => {
    dispatch(
      feachSearchBooks({
        searchValue: searchValue,
        page: page,
      }),
    );
  }, [searchValue, page, dispatch]);

  const handleSetPage = (event: { selected: number }) => {
    const newOffset = event.selected + 1 + "";
    navigator(`/search/${searchValue}/${newOffset}`);
  };

  return (
    <StyledSearchPage>
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
    </StyledSearchPage>
  );
};
