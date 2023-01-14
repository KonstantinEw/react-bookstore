import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Margin1, Color, Margin3, Media, H1, Margin2, B1, B2 } from "ui";

const StyledSearchPage = styled(motion.section)`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
`;

const Title = styled.h1`
  margin-bottom: ${Margin3.desktop};
  ${H1}
  text-transform: uppercase;
  ${Media.SM} {
    margin-bottom: ${Margin3.mobile};
    font-size: 32px;
  }
`;

const Total = styled.p`
  margin-bottom: ${Margin2.desktop};
  ${B1};
  color: ${Color.Secondary};
`;

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding-top: 48px;
  margin-bottom: ${Margin1.desktop};
  ${B2}
  color: ${Color.Secondary};
  border-top: 1px solid ${Color.Gray};
  ${Media.MD} {
    gap: 20px;
  }
  .paginaton {
    &__break,
    &__page {
      cursor: pointer;
    }
    &__active {
      color: ${Color.Primary};
    }
    &__previous {
      margin-right: auto;
    }
    &__next {
      margin-left: auto;
    }
    &__previous,
    &__next {
      color: ${Color.Primary};
      cursor: pointer;
    }
    &__disabled {
      color: ${Color.Secondary};
    }
  }
`;

export const Button = styled.button`
  margin-right: auto;
  border: none;
  background: none;
  cursor: pointer;
`;

export { Title, StyledHeader, Total, StyledSearchPage };
