import { StyledOrderActiveIcon, StyledOrderIcon } from "assets";
import { orderBooks, useAppSelector } from "store";

export const OrderNavButton = () => {
  const { cart } = useAppSelector(orderBooks);
  return <>{cart.length > 0 ? <StyledOrderActiveIcon /> : <StyledOrderIcon />}</>;
};
