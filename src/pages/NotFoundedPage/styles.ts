import { motion } from "framer-motion";
import styled from "styled-components";
import { H1, H3, Margin3 } from "ui";

export const StyledNotFoundePage = styled(motion.section)`
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
  justify-items: center;
  background-image: url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  ${H1};
  font-size: 80px;
  color: #000000;
`;

export const Subtitle = styled.h3`
  text-align: center;
  ${H3};
  color: #000000;
`;

export const SubtitleText = styled.p`
  text-align: center;
  ${H3};
  color: #000000;
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: ${Margin3.desktop};
`;
