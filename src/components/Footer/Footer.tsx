import { ThemeToggler } from "components";
import { StyledFooter, Text } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Text>&copy;2022 Bookstore</Text>
      <Text>All rights reserved</Text>
      <ThemeToggler type="checkbox" />
    </StyledFooter>
  );
};
