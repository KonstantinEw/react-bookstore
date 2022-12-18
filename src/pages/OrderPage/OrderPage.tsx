import { ArrowBack, OrderCard, Title } from "components";
import { StyledOrderPage } from "./styles";

export const OrderPage = () => {
  return (
    <StyledOrderPage>
      <ArrowBack />
      <Title>favorites</Title>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </StyledOrderPage>
  );
};
