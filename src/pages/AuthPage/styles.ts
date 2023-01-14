import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const StyledAuthPage = styled(motion.section)`
  display: grid;
`;

const StyledAuthForm = styled(motion.div)`
  place-self: center;
  width: 544px;
  margin-bottom: 90px;
  border: 1px solid ${Color.Gray};
  ${Media.MD} {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const HeaderForm = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ButtonForm = styled.button<{ activeColor?: boolean; activeBorder: boolean }>`
  width: 50%;
  height: 100%;
  background: none;
  border: none;
  border-bottom: ${({ activeBorder }) =>
    activeBorder ? `2px solid ${Color.Primary}` : `1px solid ${Color.Gray}`};
  ${H3};
  color: ${({ activeColor }) => (activeColor ? Color.Primary : Color.Gray)};
  cursor: pointer;
  transition: all 0.3s ease;
`;

export { ButtonForm, HeaderForm, StyledAuthForm, StyledAuthPage };
