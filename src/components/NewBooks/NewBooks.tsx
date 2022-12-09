import { useEffect } from "react";
import { Title } from "..";
import { BooksList } from "..";
import {
  fetchNewBooks,
  getNewBooks,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const NewBooks = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  console.log(result);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);
  return isLoading ? (
    <Title text="New Releases Books" />
  ) : (
    <section>
      <Title text="New Releases Books" />
      <BooksList responseBooks={result} />
    </section>
  );
};
