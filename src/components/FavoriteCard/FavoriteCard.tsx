import { IDetailsBook } from "types";
import StarsRating from "react-star-rate";
import {
  CardSubtitle,
  CardTitle,
  Cost,
  CostWrapper,
  ImgWrapper,
  RemoveFavoriteButton,
  StyledFaviriteCard,
  TitleWrapper,
} from "./styles";
import { useState } from "react";
import { DeleteFavoriteIcon } from "assets";

interface IProps {
  book: IDetailsBook;
  deleteFavoriteBook: () => void;
}

export const FavoriteCard = ({ book, deleteFavoriteBook }: IProps) => {
  const { image, title, subtitle, price, rating } = book;
  const [value] = useState(+rating);
  return (
    <StyledFaviriteCard>
      <ImgWrapper>
        <img src={image} alt={`book is ${title}`} />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CostWrapper>
          <Cost>{price}</Cost>
          <StarsRating value={value} disabled />
        </CostWrapper>
      </TitleWrapper>
      <RemoveFavoriteButton onClick={deleteFavoriteBook}>
        <DeleteFavoriteIcon />
      </RemoveFavoriteButton>
    </StyledFaviriteCard>
  );
};
