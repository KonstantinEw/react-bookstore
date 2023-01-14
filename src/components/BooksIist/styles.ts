import { motion } from "framer-motion";
import styled from "styled-components";
import { Margin1, Media } from "../../ui";

export const StyledBooksList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  margin-bottom: ${Margin1.desktop};
  ${Media.LG} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-column-gap: 32px;
    grid-row-gap: 48px;
  }
  ${Media.MD} {
    grid-template-columns: 1fr;
    grid-row-gap: 48px;
  }
`;
