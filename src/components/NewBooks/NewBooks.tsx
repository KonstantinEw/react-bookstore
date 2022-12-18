import { BooksList, Title } from "components";
import { INewBook } from "types";

export const NewBooks = ({ isLoading, result }: INewBook) => {
  return isLoading ? (
    <Title>Loading....</Title>
  ) : (
    <>
      <Title>New Releases Books</Title>
      <BooksList responseBooks={result} />
    </>
  );
};
