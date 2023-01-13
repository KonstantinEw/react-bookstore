import styled from "styled-components";
import { B1, Color, H2, Margin1, Media } from "ui";

const StyledOrderPage = styled.section`
  margin-bottom: ${Margin1.desktop};
  ${Media.SM} {
    margin-bottom: ${Margin1.mobile};
  }
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px 100px 0px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: end;
  ${Media.MD} {
    justify-content: center;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 200px;
  grid-row-gap: 20px;
  ${Media.SM} {
    grid-column-gap: 50px;
  }
`;

const PriceDescr = styled.span`
  ${B1};
  color: ${Color.Secondary};
`;
const Cost = styled.span`
  ${B1};
  color: ${Color.Primary};
`;

const TotalDescr = styled.span`
  ${H2};
  color: ${Color.Primary};
`;

export {
  StyledOrderPage,
  PriceContainer,
  ListWrapper,
  PriceWrapper,
  PriceDescr,
  Cost,
  TotalDescr,
  EmptyWrapper,
};
