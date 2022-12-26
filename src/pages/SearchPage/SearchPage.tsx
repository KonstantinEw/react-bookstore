import { BooksList, Loader } from "components";
import { useAppSelector, getSearchBooks } from "store";
import { Title } from "./styles";

export const SearchPage = () => {
  const { result, isLoading } = useAppSelector(getSearchBooks);
  const { books } = result;
  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>search result</Title>
          {books?.length > 0 ? <BooksList books={books} /> : <Title>no results</Title>}
        </>
      )}
    </section>
  );
};
