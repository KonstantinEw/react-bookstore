import styled from "styled-components";
import { B1, Color, H3, Margin2, Margin5, Margin8, Media, randomColor, S1 } from "ui";

const StyledFaviriteCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
  padding: 0px 20px 50px 0px;
  border-bottom: 1px solid ${Color.Gray};
  ${Media.LG} {
    padding: 0px 0px 50px 0px;
  }
  ${Media.MD} {
    grid-template-columns: 1fr 2fr 0.3fr;
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
  position: relative;
  place-self: center;
  align-items: center;
  width: 100%;
  background-color: ${randomColor()};
  ${Media.LG} {
    place-self: start;
    margin-top: 43px;
  }
  ${Media.SM} {
    place-self: center;
    width: 90%;
    margin-bottom: ${Margin5.desktop};
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 0px 0px 0px;

  ${Media.SM} {
    margin-bottom: ${Margin2.mobile};
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
  ${Media.EL} {
    gap: 100px;
  }
  ${Media.LG} {
    flex-direction: column;
    gap: 20px;
  }
`;

const Cost = styled.span`
  align-self: center;
  ${S1};
  color: ${Color.Primary};
  ${Media.LG} {
    align-self: start;
  }
`;

const RemoveFavoriteButton = styled.button`
  place-self: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  ${Media.LG} {
    place-self: start;
    padding-top: 42px;
  }
`;

const DeleteFavoriteButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
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
  Img,
  DeleteFavoriteButton,
};
