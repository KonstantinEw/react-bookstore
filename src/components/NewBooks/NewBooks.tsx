import { BooksList, Title } from "components";
import { useEffect } from "react";

import {
  fetchNewBooks,
  getNewBooks,
  useAppDispatch,
  useAppSelector,
} from "store";

export const NewBooks = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);
  return isLoading ? (
    <Title text="Loading..." />
  ) : (
    <section>
      <Title text="New Releases Books" />
      <BooksList responseBooks={result} />
    </section>
  );
};
