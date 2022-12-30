import { ArrowBackButton, OrderCard, Title } from "components";
import { deleteOrder, orderBooks, useAppDispatch, useAppSelector } from "store";
import { StyledOrderPage } from "./styles";

export const OrderPage = () => {
  const { order } = useAppSelector(orderBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledOrderPage>
      <ArrowBackButton />
      <Title>your cart</Title>
      <ul>
        {order.map((book) => {
          return (
            <OrderCard
              key={book.isbn13}
              book={book}
              deleteOrder={() => {
                dispatch(deleteOrder(book.isbn13));
              }}
            />
          );
        })}
      </ul>
    </StyledOrderPage>
  );
};
