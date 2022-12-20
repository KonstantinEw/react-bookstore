import styled from "styled-components";
import { Margin2, Color, Media, Margin5, randomColor, Margin8, H3, B1, S1, H2 } from "ui";

const StyledOrderCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
  padding: 0px 20px 50px 0px;
  border-bottom: 1px solid ${Color.Gray};
  ${Media.LG} {
    grid-template-columns: 1fr 2fr 1fr;
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
  height: 192px;
  background-color: ${() => randomColor()};
  ${Media.MD} {
    width: 208px;
    height: 156px;
  }
  ${Media.SM} {
    width: 90%;
    height: 204px;
    margin-bottom: ${Margin5.desktop};
  }
`;

const TitleWrapper = styled.div`
  padding: 36px 0px 0px 0px;
  ${Media.SM} {
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
  padding-top: 56px;
  gap: 113px;
  ${Media.SM} {
    gap: 100px;
  }
`;

const Cost = styled.span`
  ${H2};
  color: ${Color.Primary};
`;

const DeleteButton = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  background: none;
  border: none;
  color: ${Color.Primary};
  cursor: pointer;
`;

const DeleteCross = styled.div`
  width: 32px;
  height: 32px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:before,
  :after {
    position: absolute;
    left: 30px;
    bottom: 17px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export {
  DeleteCross,
  DeleteButton,
  Cost,
  CostWrapper,
  CardSubtitle,
  CardTitle,
  TitleWrapper,
  StyledOrderCard,
  ImgWrapper,
};
