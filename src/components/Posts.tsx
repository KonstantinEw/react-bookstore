import { useEffect, useState } from "react";
import { Post } from "./Post";

export interface IBook {
  map(
    arg0: ({
      image,
      isbn13,
      price,
      subtitle,
      title,
      url,
    }: {
      image: string;
      isbn13: string;
      price: string;
      subtitle: string;
      title: string;
      url: string;
    }) => JSX.Element
  ): import("react").ReactNode;
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export const Posts = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("	https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((books) => {
        setBooks(books);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {Object.values(books)[2].map(
        ({ image, isbn13, price, subtitle, title, url }) => (
          <Post
            image={image}
            key={isbn13}
            price={price}
            subtitle={subtitle}
            title={title}
            url={url}
          />
        )
      )}
    </div>
  );
};
