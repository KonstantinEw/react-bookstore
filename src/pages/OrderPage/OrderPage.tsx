import { ArrowBackButton, OrderCard, Title } from "components";
import { StyledOrderPage } from "./styles";

export const OrderPage = () => {
  return (
    <StyledOrderPage>
      <ArrowBackButton />
      <Title>your cart</Title>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </StyledOrderPage>
  );
};
