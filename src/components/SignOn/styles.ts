import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Color, H3, Media } from "ui";

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

const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px 32px 32px;
`;

export { BodyForm, ButtonForm };
