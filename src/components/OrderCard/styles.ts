import styled from "styled-components";
import { Margin2, Color, Media, Margin5, randomColor, Margin8, H3, B1, H2 } from "ui";

const StyledOrderCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
  padding: 0px 20px 50px 0px;
  border-bottom: 1px solid ${Color.Gray};
  ${Media.EL} {
    grid-template-columns: 1.5fr 2fr 0.3fr;
  }
  ${Media.LG} {
    grid-template-columns: 1fr 2fr 0.5fr;
    padding: 0px 0px 50px 0px;
  }
  ${Media.MD} {
    grid-template-columns: 1fr 1fr 0.3fr;
    padding: 0px 0px 50px 0px;
  }
  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: ${Margin5.desktop};
    padding: 0px 0px 0px 0px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  place-self: center;
  align-items: center;
  width: 100%;
  background-color: ${randomColor()};
  ${Media.SM} {
    width: 90%;
    margin-bottom: ${Margin5.desktop};
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TitleWrapper = styled.div`
  padding: 36px 0px 0px 0px;
  ${Media.LG} {
    padding: 0;
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
  gap: 113px;
  padding-top: 56px;
  ${Media.EL} {
    gap: 30px;
  }
  ${Media.LG} {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
  }
  ${Media.SM} {
    gap: 100px;
  }
`;

const Cost = styled.span`
  ${H2};
  color: ${Color.Primary};
  ${Media.LG} {
    ${H3};
  }
  ${Media.SM} {
    margin-bottom: ${Margin2.mobile};
  }
`;

const DeleteButtonOnImg = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
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

const Amount = styled.p`
  padding-bottom: 15px;
  ${H3};
`;

const AmountButton = styled.button`
  background: none;
  border: none;
  ${H2}
  outline: none;
  cursor: pointer;
`;

const AmountWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
  Amount,
  AmountButton,
  AmountWrapper,
  Img,
  DeleteButtonOnImg,
};
