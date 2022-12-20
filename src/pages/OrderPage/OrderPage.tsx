import { ArrowBack, OrderCard, Title } from "components";
import { StyledOrderPage } from "./styles";

export const OrderPage = () => {
  return (
    <StyledOrderPage>
      <ArrowBack />
      <Title>your cart</Title>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </StyledOrderPage>
  );
};
