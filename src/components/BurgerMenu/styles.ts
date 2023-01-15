import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { Color } from "ui";

const BurgerButton = styled.button`
  padding-bottom: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Cross = styled(FiX)`
  width: 24px;
  height: 24px;
  color: ${Color.Primary};
`;

export { BurgerButton, Cross };
