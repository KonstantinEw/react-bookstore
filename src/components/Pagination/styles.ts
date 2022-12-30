import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Color, Margin1 } from "ui";

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Margin1.desktop};
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
