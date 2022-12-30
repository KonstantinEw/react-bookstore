import styled from "styled-components";
import { B1, Color, H3, Margin2, Margin5, Margin8, Media, randomColor, S1 } from "ui";

const StyledFaviriteCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
  padding: 0px 20px 50px 0px;
  border-bottom: 1px solid ${Color.Gray};
  ${Media.LG} {
    grid-template-columns: 1fr 2fr;
    padding: 0px 0px 50px 0px;
  }
  ${Media.MD} {
    grid-template-columns: 1fr 2fr;
    padding: 0px 0px 50px 0px;
  }
  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${Margin5.desktop};
    padding: 0px 0px 0px 0px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  background-color: ${() => randomColor()};
  ${Media.MD} {
    width: 208px;
  }
  ${Media.SM} {
    width: 90%;
    margin-bottom: ${Margin5.desktop};
  }
`;

const TitleWrapper = styled.div`
  padding: 36px 0px 0px 0px;
  ${Media.SM} {
    /* margin-bottom: ${Margin2.mobile}; */
    padding: 0px 0px 32px 0px;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: ${Margin8.desktop};
  ${H3};
  color: ${Color.Primary};
`;

const CardSubtitle = styled.p`
  margin-bottom: ${Margin5.desktop};
  ${B1};
  color: ${Color.Secondary};
`;

const CostWrapper = styled.div`
  display: flex;
  gap: 187px;
  ${Media.SM} {
    gap: 100px;
  }
`;

const Cost = styled.span`
  ${S1};
  color: ${Color.Primary};
`;

const RemoveFavoriteButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export {
  Cost,
  CostWrapper,
  CardSubtitle,
  CardTitle,
  TitleWrapper,
  ImgWrapper,
  StyledFaviriteCard,
  RemoveFavoriteButton,
};
