import { StyledButton } from "./styles";

interface Iprops {
  children: string;
  type?: "button" | "submit" | "reset";
  buttonWidth?: string;
  bgColor?: string;
  buttonColor?: string;
  brColor?: string;
}

export const Button = (props: Iprops) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
