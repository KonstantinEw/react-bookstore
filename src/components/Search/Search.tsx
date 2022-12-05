import { StyledSearch } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
}

export const Search = ({ placeholder, type }: IProps) => {
  return <StyledSearch type={type} placeholder={placeholder}></StyledSearch>;
};
