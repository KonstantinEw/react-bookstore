import { ArrowBack } from "components";
import { StyledNotFoundePage, Subtitle, SubtitleText, SubtitleWrapper, Title } from "./styles";

export const NotFoundedPage = () => {
  return (
    <StyledNotFoundePage>
      <Title>404</Title>
      <ArrowBack />
      <SubtitleWrapper>
        <Subtitle>Look like you're lost</Subtitle>
        <SubtitleText>the page you are looking for not avaible!</SubtitleText>
      </SubtitleWrapper>
    </StyledNotFoundePage>
  );
};
