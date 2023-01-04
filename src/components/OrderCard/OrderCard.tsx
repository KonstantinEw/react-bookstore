import { IOrderBook } from "types/types";
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
  Amount,
  AmountButton,
  AmountWrapper,
} from "./styles";
import { MinusIcon, PlusIcon } from "assets";

interface IProps {
  book: IOrderBook;
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
  const { image, title, price, amount, authors } = book;
  const handleDeleteBook = () => {
    deleteOrder();
  };

  const handleAddAmount = () => {
    incrementQuantity();
  };
  const handleDeleteAmount = () => {
    decrimentQuantity();
  };

  return (
    <StyledOrderCard>
      <ImgWrapper>
        <img src={image} alt={`book is ${title}`} />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{authors}</CardSubtitle>
        <AmountWrapper>
          <AmountButton onClick={handleDeleteAmount}>
            <MinusIcon />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton onClick={handleAddAmount}>
            <PlusIcon />
          </AmountButton>
        </AmountWrapper>
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
