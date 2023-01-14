import { motion } from "framer-motion";
import styled from "styled-components";

const Spinner = styled(motion.div)`
  place-self: center;
  width: 25px;
  height: 25px;
  margin: 20px auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left: 4px solid #000;
  border-right: 4px solid #000;
`;

const StyledLoader = styled.div`
  display: grid;
  height: 80vh;
`;

export { StyledLoader, Spinner };
