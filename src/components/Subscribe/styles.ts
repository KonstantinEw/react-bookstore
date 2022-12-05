import styled from "styled-components";
import { Color, H2, Margin1, Margin4, Margin7, S1 } from "../../ui";

export const StyledSubscribe = styled.section`
  padding: 56px 64px;
  margin-bottom: ${Margin1.desktop};
  background-color: ${Color.Purple};
`;

export const StyledForm = styled.form`
  height: 56px;
  display: grid;
  grid-template-columns: 73% 27%;
`;

export const StyledInputField = styled.input`
  padding: 16px 24px;
`;

export const StyledTitle = styled.h2`
  ${Margin7.desktop}
  ${H2}
`;

export const StyledSubTitle = styled.p`
  margin-bottom: ${Margin4.desktop};
  ${S1}
  color:${Color.Secondary};
  font-weight: 400;
`;
