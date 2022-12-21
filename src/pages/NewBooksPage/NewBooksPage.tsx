import { BooksList, Loader, Subscribe, Title } from "components";
import { useEffect, useState } from "react";
import { feachGetBooks, fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";

export const NewBooksPage = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <Loader />
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
