import { ChangeEvent, useEffect, useState } from "react";
import { SearchIcon, StyledSearchIcon } from "assets";
import { feachSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "store";
import { SearchButton, StyledSearch, Wrapper } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ placeholder, type, value, onChange }: IProps) => {
  const [params, setParams] = useState({
    searchValue: "",
    page: "",
  });
  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector(getSearchBooks);
  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [dispatch, params]);
  const { books, page, error, total } = result;
  const handleParams = () => {
    setParams({ searchValue: value, page: "1" });
  };
  return (
    <Wrapper>
      {" "}
      <StyledSearch
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></StyledSearch>
      <SearchButton onClick={handleParams}>
        <StyledSearchIcon />
      </SearchButton>
    </Wrapper>
  );
};
