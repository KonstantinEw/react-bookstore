import { IBook } from "types";
import { ImageWrap, StyledBooksListItem, Subtitle, Title, Cost, DescrWrapper } from "./styles";

export const BookListItem = ({ image, title, url, subtitle, price }: IBook) => {
  return (
    <StyledBooksListItem>
      <ImageWrap>
        <img src={image} alt={title} />
      </ImageWrap>
      <Title href={url}>{title}</Title>
      <Subtitle>{subtitle ? subtitle : "No description of book"}</Subtitle>
      <Cost>{price}</Cost>
    </StyledBooksListItem>
  );
};
