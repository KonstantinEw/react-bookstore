import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H2, Margin1, Media } from "ui";

const StyledFavoritesPage = styled(motion.section)`
  margin-bottom: ${Margin1.desktop};
  ${Media.SM} {
    margin-bottom: ${Margin1.mobile};
  }
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${Margin1.desktop};
  padding: 100px 0px 100px 0px;
  ${H2};
  color: ${Color.Primary};
`;

export { EmptyWrapper, StyledFavoritesPage };
