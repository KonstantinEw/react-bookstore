import { BooksList, Subscribe, Title } from "components";
import { useEffect, useState } from "react";
import { feachGetBooks, fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { Spinner, SpinnerWrapper } from "./styles";

export const NewBooksPage = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
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
