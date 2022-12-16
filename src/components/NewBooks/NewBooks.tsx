import { BooksList, Title } from "components";
import { useEffect } from "react";

import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";

export const NewBooks = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);
  return isLoading ? (
    <Title>Loading....</Title>
  ) : (
    <section>
      <Title>New Releases Books</Title>
      <BooksList responseBooks={result} />
    </section>
  );
};
