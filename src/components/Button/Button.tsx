import { StyledButton } from "./styles";

interface Iprops {
  text: string;
}

export const Button = ({ text }: Iprops) => {
  return <StyledButton>{text}</StyledButton>;
};
