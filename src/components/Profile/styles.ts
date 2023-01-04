import styled from "styled-components";
import { B2, Color, H3, Margin1, Margin2, Margin7, Media } from "ui";

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
  ${Media.LG} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    margin-bottom: ${Margin2.mobile};
  }
`;

const Subtitle = styled.h3`
  margin-bottom: ${Margin7.desktop};
  ${H3}
  color: ${Color.Primary};
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: ${Margin1.desktop};
`;

const ButtonConteiner = styled.div`
  display: flex;
  gap: 30px;
  width: 40%;
  ${Media.LG} {
    justify-content: space-between;
    width: 100%;
  }
  ${Media.MD} {
    flex-direction: column;
  }
`;

const PassWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  margin-bottom: ${Margin1.desktop};
  ${Media.LG} {
    flex-direction: column;
    gap: 5px;
  }
`;
const NewPassWrapper = styled.div`
  width: 50%;
  ${Media.LG} {
    width: 100%;
  }
`;

const ConfirmPassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;
  ${Media.LG} {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  min-height: 15px;
  margin-bottom: 10px;
  color: ${Color.Red};
`;

const StyledInput = styled.input`
  height: 56px;
  margin-bottom: 5px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.Gray};
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
    text-transform: capitalize;
  }
`;

const Label = styled.label`
  padding-bottom: 10px;
  ${B2};
  color: ${Color.Primary};
  text-transform: uppercase;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  ButtonWrapper,
  Subtitle,
  ProfileInfo,
  PassWrapper,
  NewPassWrapper,
  ConfirmPassWrapper,
  ButtonConteiner,
  StyledInput,
  InputWrapper,
  Label,
  ErrorMessage,
};
