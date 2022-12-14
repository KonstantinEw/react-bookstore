import { StyledButton } from "./styles";

interface Iprops {
  children: string;
  type?: "button" | "submit" | "reset";
  buttonWidth?: string;
  bgColor?: string;
  buttonColor?: string;
  brColor?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  margin?: string;
}

export const Button = (props: Iprops) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
