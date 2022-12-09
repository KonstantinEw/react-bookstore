import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ placeholder, type, value, onChange }: IProps) => {
  const getBooks = () => {};

  return (
    <StyledSearch
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></StyledSearch>
  );
};
