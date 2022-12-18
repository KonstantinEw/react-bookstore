import {
  StyledOrderCard,
  ImgWrapper,
  TitleWrapper,
  CardTitle,
  CardSubtitle,
  CostWrapper,
  Cost,
  DeleteButton,
  DeleteCross,
} from "./styles";

export const OrderCard = () => {
  return (
    <StyledOrderCard>
      <ImgWrapper>
        <img src="" alt="" />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>Lorem, ipsum dolor sit amet</CardTitle>
        <CardSubtitle>Lorem, ipsum dolor sit amet</CardSubtitle>
        <p>
          <span>-</span>1<span>+</span>
        </p>
      </TitleWrapper>
      <CostWrapper>
        <Cost>36$</Cost>
        <DeleteButton>
          <DeleteCross />
        </DeleteButton>
      </CostWrapper>
    </StyledOrderCard>
  );
};
