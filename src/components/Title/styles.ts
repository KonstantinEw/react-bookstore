import { motion } from "framer-motion";
import styled from "styled-components";
import { H1, Margin3, Media } from "ui";

export const StyledTitle = styled(motion.h1)`
  margin-bottom: ${Margin3.desktop};
  ${H1}
  text-transform: uppercase;
  ${Media.SM} {
    margin-bottom: ${Margin3.mobile};
    font-size: 32px;
  }
`;
