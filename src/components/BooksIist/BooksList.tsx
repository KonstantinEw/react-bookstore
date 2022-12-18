import { BookListItem } from "components";
import { IBook } from "types";
import { StyledBooksList } from "./styles";

interface IProps {
  responseBooks: IBook[];
}

export const BooksList = ({ responseBooks }: IProps) => {
  return (
    <StyledBooksList>
      {responseBooks.map((book) => (
        <BookListItem key={book.isbn13} {...book} />
      ))}
    </StyledBooksList>
  );
};
