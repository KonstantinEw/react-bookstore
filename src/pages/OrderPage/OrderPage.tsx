import { ArrowBackButton, Button, OrderCard, Title } from "components";
import { useEffect } from "react";

import {
  decrementQuantity,
  deleteOrder,
  incrementQuantity,
  orderBooks,
  useAppDispatch,
  useAppSelector,
  getTotal,
} from "store";
import {
  Cost,
  EmptyWrapper,
  ListWrapper,
  PriceContainer,
  PriceDescr,
  PriceWrapper,
  StyledOrderPage,
  TotalDescr,
} from "./styles";

export const OrderPage = () => {
  const { cart, quantity, total } = useAppSelector(orderBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  const vat = total * 0.2;
  const totalPrice = total + vat;
  return (
    <StyledOrderPage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      {cart.length === 0 && (
        <EmptyWrapper>
          <TotalDescr>Cart is empty</TotalDescr>
        </EmptyWrapper>
      )}
      {cart.length > 0 && (
        <PriceWrapper>
          <PriceContainer>
            <ListWrapper>
              <PriceDescr>Sum total</PriceDescr>
              <Cost>${total.toFixed(2)}</Cost>
              <PriceDescr>VAT</PriceDescr>
              <Cost>${vat.toFixed(2)}</Cost>
              <TotalDescr>TOTAL:</TotalDescr>
              <TotalDescr>${totalPrice.toFixed(2)}</TotalDescr>
            </ListWrapper>
            <Button>check out</Button>
          </PriceContainer>
        </PriceWrapper>
      )}
    </StyledOrderPage>
  );
};
