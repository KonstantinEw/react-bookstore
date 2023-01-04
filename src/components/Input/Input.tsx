// не работает пока...рефы
import { ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  children?: string;
  type: "password" | "email" | "text";
  placeholder: string | undefined;
  errors?: string;
  name?: string;
  value?: string;
}

export const Input = ({ type, placeholder, children, errors, value }: IProps) => {
  return (
    <InputWrapper>
      <Label>{children}</Label>
      <StyledInput type={type} placeholder={placeholder} value={value} />
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </InputWrapper>
  );
};
