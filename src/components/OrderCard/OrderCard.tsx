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
  Img,
  DeleteButtonOnImg,
} from "./styles";
import { DeleteCrossIcon, MinusIcon, PlusIcon } from "assets";
import { useWindowSize } from "hooks";

interface IProps {
  book: IOrderBook;
  deleteOrder: () => void;
  incrementQuantity: () => void;
  decrimentQuantity: () => void;
  quantity: number;
}

export const OrderCard = ({ book, deleteOrder, decrimentQuantity, incrementQuantity }: IProps) => {
  const { image, title, price, amount, authors } = book;
  const { width = 0 } = useWindowSize();
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
        {width < 575 && (
          <DeleteButtonOnImg onClick={handleDeleteBook}>
            <DeleteCrossIcon />
          </DeleteButtonOnImg>
        )}
        <Img src={image} alt={`book is ${title}`} />
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
        {width > 575 && (
          <DeleteButton onClick={handleDeleteBook}>
            <DeleteCross />
          </DeleteButton>
        )}
      </CostWrapper>
    </StyledOrderCard>
  );
};
