import { ArrowBackButton, OrderCard, Title } from "components";
import {
  decrementQuantity,
  deleteOrder,
  incrementQuantity,
  orderBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledOrderPage } from "./styles";

export const OrderPage = () => {
  const { cart, quantity } = useAppSelector(orderBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledOrderPage>
      <ArrowBackButton />
      <Title>your cart</Title>
      <ul>
        {cart.map((book) => {
          return (
            <OrderCard
              key={book.isbn13}
              book={book}
              quantity={quantity}
              deleteOrder={() => {
                dispatch(deleteOrder(book.isbn13));
              }}
              incrementQuantity={() => dispatch(incrementQuantity(book.isbn13))}
              decrimentQuantity={() => dispatch(decrementQuantity(book.isbn13))}
            />
          );
        })}
      </ul>
    </StyledOrderPage>
  );
};
