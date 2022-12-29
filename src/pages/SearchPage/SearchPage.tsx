import { BooksList, Loader } from "components";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, getSearchBooks, feachSearchBooks, useAppDispatch } from "store";
import { Title } from "./styles";

export const SearchPage = () => {
  const params = useParams();
  const [options, setOptions] = useState({
    searchValue: `${params.searchValue}`,
    page: `${params.page}`,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachSearchBooks(options));
  }, [options, dispatch]);

  const { result, isLoading } = useAppSelector(getSearchBooks);
  const { books } = result;

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>{`'${params.searchValue}' search results`}</Title>
          {books?.length > 0 ? <BooksList books={books} /> : <Title>no results</Title>}
        </>
      )}
    </section>
  );
};
