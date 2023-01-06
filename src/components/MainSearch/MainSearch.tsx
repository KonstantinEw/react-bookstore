import { StyledSearchIcon } from "assets";
import { useInput } from "hooks";
import { useNavigate } from "react-router";
import { InputWrapper, Search, SearchButton } from "./styles";

export const MainSearch = () => {
  const navigator = useNavigate();
  const { value, onChange } = useInput();
  const handleSearch = () => {
    navigator(`search/${value}/1`);
  };
  return (
    <InputWrapper>
      <Search placeholder="Search" onChange={onChange} value={value} />
      <SearchButton onClick={handleSearch}>
        <StyledSearchIcon />
      </SearchButton>
    </InputWrapper>
  );
};
