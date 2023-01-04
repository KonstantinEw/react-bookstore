import styled from "styled-components";
import { B2, Color, H2, Margin1, Margin4, Margin7, Media } from "ui";

const StyledSubscribe = styled.section`
  padding: 56px 64px 46px 64px;
  margin-bottom: ${Margin1.desktop};
  background-color: ${Color.Purple};

  ${Media.MD} {
    padding: 24px;
    margin-bottom: ${Margin1.mobile};
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 73% 27%;
  min-height: 56px;
  margin-bottom: 10px;
  ${Media.MD} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 24px;
  outline: none;
  border: none;

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

const Title = styled.h2`
  ${Margin7.desktop};
  ${H2};
  color: ${Color.Primary};
`;

const SubTitle = styled.p`
  margin-bottom: ${Margin4.desktop};
  ${B2};
  color: ${Color.Secondary};
`;

const ErrorMessage = styled.p`
  color: ${Color.Red};
`;

const SuccessTitle = styled.p`
  place-self: center;
  ${Margin7.desktop};
  ${H2};
  color: ${Color.Primary};
`;

export { ErrorMessage, SubTitle, Title, InputField, Form, StyledSubscribe, SuccessTitle };
