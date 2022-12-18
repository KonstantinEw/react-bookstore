import { NewBooks } from "components";
import { useEffect } from "react";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";

export const NewBooksPage = () => {
  const { isLoading, result, error } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <section>
      <NewBooks error={error} isLoading={isLoading} result={result} />
    </section>
  );
};
