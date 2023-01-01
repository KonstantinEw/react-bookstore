import { useState } from "react";
import { IDetailsBook } from "types";
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
  book: IDetailsBook;
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
  const { image, title, subtitle, price, amount } = book;
  const [bookAmount, setBookAmount] = useState(amount);
  console.log(book);
  const handleDeleteBook = () => {
    deleteOrder();
  };

  const handleAddAmount = () => {
    setBookAmount(bookAmount && bookAmount + 1);
  };
  const handleDeleteAmount = () => {
    setBookAmount(bookAmount && bookAmount - 1);
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
          <button onClick={handleDeleteAmount}>-</button>
          {bookAmount}
          <button onClick={handleAddAmount}>+</button>
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
