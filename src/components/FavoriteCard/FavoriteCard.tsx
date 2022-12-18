import {
  CardSubtitle,
  CardTitle,
  Cost,
  CostWrapper,
  ImgWrapper,
  StyledFaviriteCard,
  TitleWrapper,
} from "./styles";

export const FavoriteCard = () => {
  return (
    <StyledFaviriteCard>
      <ImgWrapper>
        <img src="" alt="" />
      </ImgWrapper>
      <TitleWrapper>
        <CardTitle>Lorem, ipsum dolor sit amet</CardTitle>
        <CardSubtitle>Lorem, ipsum dolor sit amet</CardSubtitle>
        <CostWrapper>
          <Cost>36$</Cost>
          <span>raitingStar</span>
        </CostWrapper>
      </TitleWrapper>
    </StyledFaviriteCard>
  );
};
