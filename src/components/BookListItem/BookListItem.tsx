import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IBook } from "types";
import { ImageWrap, StyledBooksListItem, Subtitle, Title, Cost } from "./styles";

export const BookListItem = ({ image, title, subtitle, price, isbn13 }: IBook) => {
  return (
    <StyledBooksListItem>
      <ImageWrap>
        <img src={image} alt={title} />
      </ImageWrap>
      <Title to={generatePath(ROUTE.DETAILS, { isbn13: isbn13 })}>{title}</Title>
      <Subtitle>{subtitle ? subtitle : "No description of book"}</Subtitle>
      <Cost>{price}</Cost>
    </StyledBooksListItem>
  );
};
