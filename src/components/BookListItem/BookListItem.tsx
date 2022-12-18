import { StarsRaiting } from "components";
import { IBook } from "types";
import { RaitingWrapper, ImageWrap, StyledBooksListItem, Subtitle, Title, Cost } from "./styles";

export const BookListItem = ({ image, title, url, subtitle, price }: IBook) => {
  return (
    <StyledBooksListItem>
      <ImageWrap>
        <img src={image} alt={title} />
      </ImageWrap>
      <Title href={url}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <RaitingWrapper>
        <Cost>{price}</Cost>
        <StarsRaiting />
      </RaitingWrapper>
    </StyledBooksListItem>
  );
};
