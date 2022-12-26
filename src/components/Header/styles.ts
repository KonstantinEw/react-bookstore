import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { B1, Color, Margin1, Media } from "ui";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
`;

const LogoLink = styled(NavLink)`
  padding: 14px 0px 14px 0px;
`;

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
  ${Media.LG} {
    display: none;
  }
`;

const SearchLink = styled(Link)`
  position: absolute;
  right: 1%;
  top: 23%;
  background: none;
  border: none;
  outline: none;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 50%;
`;

export { LogoLink, StyledHeader, InputWrapper, SearchLink, Search };
