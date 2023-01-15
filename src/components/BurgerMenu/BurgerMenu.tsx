import { StyledBurgerMenuIcon } from "assets";
import { useLayoutEffect } from "react";
import { BurgerButton, Cross } from "./styles";

interface IProps {
  isOpen: boolean;
  toggleOpenMenu: () => void;
  blockBody: (arg: boolean) => void;
}

export const BurgerMenu = ({ toggleOpenMenu, isOpen, blockBody }: IProps) => {
  useLayoutEffect(() => {
    blockBody(isOpen);
  });

  return (
    <BurgerButton onClick={toggleOpenMenu}>
      {isOpen ? <Cross /> : <StyledBurgerMenuIcon />}
    </BurgerButton>
  );
};
