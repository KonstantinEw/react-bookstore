import { StarsRaiting } from "components";
import { RaitingWrapper, ImageWrap, StyledBooksListItem, Subtitle, Title, Cost } from "./styles";

interface IProps {
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  isbn13: string;
}

export const BookListItem = ({ image, title, url, subtitle, price }: IProps) => {
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
