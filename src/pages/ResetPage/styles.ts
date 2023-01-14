import { motion } from "framer-motion";
import styled from "styled-components";
import { B2, Color, H3, Margin1, Media } from "ui";

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
  width: 100%;
`;

const BodyForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledFoggotPassPage = styled(motion.section)`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  width: 544px;
  margin-bottom: ${Margin1.desktop};
  padding: 32px 40px;
  border: 1px solid ${Color.Gray};
  ${Media.MD} {
    margin-bottom: 170px;
  }
  ${Media.SM} {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 32px;
  ${H3};
`;

export {
  Title,
  BodyForm,
  InputWrapper,
  Label,
  StyledInput,
  ErrorMessage,
  StyledFoggotPassPage,
  FormWrapper,
};
