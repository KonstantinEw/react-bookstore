import { useEffect, useState } from "react";
import { Title } from "..";
import { booksAPI } from "../../services";
import { IBook, IResponseBooks } from "../../types";
import { BookItem } from "..";
import { StyledBooksList } from "./styles";

export const BooksList = () => {
  const [booksList, setBooksList] = useState<IResponseBooks>(
    {} as IResponseBooks
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    booksAPI
      .getNewBooks()
      .then(setBooksList)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Title text="New Releases Books" />;
  }
  return (
    <section>
      <Title text="New Releases Books" />
      <StyledBooksList>
        {booksList.books.map((book) => (
          <BookItem
            key={book.isbn13}
            image={book.image}
            price={book.price}
            subtitle={book.subtitle}
            title={book.title}
            url={book.url}
          />
        ))}
      </StyledBooksList>
    </section>
  );
};
