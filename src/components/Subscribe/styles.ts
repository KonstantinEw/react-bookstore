import styled from "styled-components";
import { Color, H2, Margin1, Margin4, Margin7, S1 } from "../../ui";

export const StyledSubscribe = styled.section`
  padding: 56px 64px;
  margin-bottom: ${Margin1.desktop};
  background-color: ${Color.Purple};
`;

export const Form = styled.form`
  height: 56px;
  display: grid;
  grid-template-columns: 73% 27%;
`;

export const InputField = styled.input`
  padding: 16px 24px;
`;

export const Title = styled.h2`
  ${Margin7.desktop}
  ${H2}
`;

export const SubTitle = styled.p`
  margin-bottom: ${Margin4.desktop};
  ${S1}
  color:${Color.Secondary};
  font-weight: 400;
`;
