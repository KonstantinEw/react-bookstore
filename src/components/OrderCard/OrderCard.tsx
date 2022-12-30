import { IBook } from "types";
import {
  StyledOrderCard,
  ImgWrapper,
  TitleWrapper,
  CardTitle,
  CardSubtitle,
  CostWrapper,
  Cost,
  DeleteButton,
  DeleteCross,
} from "./styles";

interface IProps {
  book: IBook;
  deleteOrder: () => void;
}

export const OrderCard = ({ book, deleteOrder }: IProps) => {
  const { image, title, subtitle, price } = book;
  const handleDeleteBook = () => {
    deleteOrder();
  };
  return (
    <StyledOrderCard>
      <ImgWrapper>
        <img src={image} alt={`book is ${title}`} />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <p>
          <span>-</span>1<span>+</span>
        </p>
      </TitleWrapper>
      <CostWrapper>
        <Cost>{price}</Cost>
        <DeleteButton onClick={handleDeleteBook}>
          <DeleteCross />
        </DeleteButton>
      </CostWrapper>
    </StyledOrderCard>
  );
};
