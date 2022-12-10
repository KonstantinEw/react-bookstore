import { ChangeEvent, useEffect, useState } from "react";
import {
  feachSearchBooks,
  getSearchBooks,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { StyledSearch } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ placeholder, type, value, onChange }: IProps) => {
  const [params, setParams] = useState(value);
  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector(getSearchBooks);
  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [dispatch]);

  // разобраться с типизацией

  const searchBooks = result.filter((book) => {
    return book.title.toLowerCase().includes(params.toLowerCase());
  });

  return (
    <>
      <StyledSearch
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></StyledSearch>
    </>
  );
};
