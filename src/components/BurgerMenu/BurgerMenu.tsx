import { BurgerMenuIcon } from "assets";
import { BurgerButton } from "./styles";

interface IProps {
  toggleOpenMenu: () => void;
}

export const BurgerMenu = ({ toggleOpenMenu }: IProps) => {
  return (
    <BurgerButton onClick={toggleOpenMenu}>
      <BurgerMenuIcon />
    </BurgerButton>
  );
};
