import styled from "styled-components";
import { B1, Color, Media } from "ui";

const StyledSearch = styled.input`
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
  ${Media.LG} {
    display: none;
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

const Wrapper = styled.div`
  position: relative;
  width: 50%;
`;

export { Wrapper, SearchButton, StyledSearch };
