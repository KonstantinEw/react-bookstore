import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IBook } from "types";
import { ImageWrap, StyledBooksListItem, Subtitle, Title, Cost } from "./styles";

interface IProps {
  book: IBook;
}

const imageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const BookListItem = ({ book }: IProps) => {
  const { image, title, subtitle, isbn13, price } = book;
  return (
    <StyledBooksListItem to={generatePath(ROUTE.DETAILS, { isbn13: isbn13 })}>
      <ImageWrap initial={imageAnimation.hidden} whileInView={imageAnimation.visible}>
        <img src={image} alt={title} />
      </ImageWrap>
      <Title>{title.length > 40 ? title.slice(0, 40) + "..." : title}</Title>
      <Subtitle>
        {subtitle.length > 60 ? subtitle.slice(0, 60) + "..." : "No description of book"}
      </Subtitle>
      <Cost>{price}</Cost>
    </StyledBooksListItem>
  );
};
