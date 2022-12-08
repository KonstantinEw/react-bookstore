import { useInput } from "../../hooks";
import { StyledSearch } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
}

export const Search = ({ placeholder, type }: IProps) => {
  const search = useInput();

  return <StyledSearch type={type} placeholder={placeholder}></StyledSearch>;
};
