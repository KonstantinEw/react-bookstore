import { IDetailsBook } from "types";
import StarsRating from "react-star-rate";
import {
  CardSubtitle,
  CardTitle,
  Cost,
  CostWrapper,
  DeleteFavoriteButton,
  Img,
  ImgWrapper,
  RemoveFavoriteButton,
  StyledFaviriteCard,
  TitleWrapper,
} from "./styles";
import { useState } from "react";
import { DeleteFavoriteIcon, StyledAddFavoriteIcon } from "assets";
import { useWindowSize } from "hooks";

interface IProps {
  book: IDetailsBook;
  deleteFavoriteBook: () => void;
}

export const FavoriteCard = ({ book, deleteFavoriteBook }: IProps) => {
  const { width = 0 } = useWindowSize();
  const { image, title, subtitle, price, rating } = book;
  const [value] = useState(+rating);
  return (
    <StyledFaviriteCard>
      <ImgWrapper>
        {width < 575 && (
          <DeleteFavoriteButton onClick={deleteFavoriteBook}>
            <StyledAddFavoriteIcon />
          </DeleteFavoriteButton>
        )}
        <Img src={image} alt={`book is ${title}`} />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CostWrapper>
          <Cost>{price}</Cost>
          <StarsRating value={value} disabled />
        </CostWrapper>
      </TitleWrapper>
      {width > 575 && (
        <RemoveFavoriteButton onClick={deleteFavoriteBook}>
          <DeleteFavoriteIcon />
        </RemoveFavoriteButton>
      )}
    </StyledFaviriteCard>
  );
};
