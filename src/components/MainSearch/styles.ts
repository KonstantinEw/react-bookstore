import styled from "styled-components";
import { B1, Color, Media } from "ui";

const Search = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 20px 15px 20px;
  border: 1px solid ${Color.Gray};
  background-color: ${Color.Light};
  ${B1}
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 1%;
  top: 23%;
  background: none;
  border: none;
  outline: none;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${Media.LG} {
    width: 80%;
  }
`;

export { InputWrapper, SearchButton, Search };
