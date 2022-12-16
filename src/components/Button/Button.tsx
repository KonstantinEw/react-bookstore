import { StyledButton } from "./styles";

interface Iprops {
  children: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type }: Iprops) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
