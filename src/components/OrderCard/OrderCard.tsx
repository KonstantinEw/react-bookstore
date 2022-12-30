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
  incrementQuantity: () => void;
  decrimentQuantity: () => void;
  quantity: number;
}

export const OrderCard = ({
  book,
  deleteOrder,
  decrimentQuantity,
  incrementQuantity,
  quantity,
}: IProps) => {
  const { image, title, subtitle, price } = book;
  const handleDeleteBook = () => {
    deleteOrder();
  };

  const handleAddQuantity = () => {
    incrementQuantity();
  };
  const handleMinusQuantity = () => {
    decrimentQuantity();
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
          <button onClick={handleMinusQuantity}>-</button>
          {quantity}
          <button onClick={handleAddQuantity}>+</button>
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
