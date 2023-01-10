import styled from "styled-components";
import { Color, H3, Media } from "ui";

const StyledAuthPage = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAuthForm = styled.div`
  width: 544px;
  margin-bottom: 100px;
  border: 1px solid ${Color.Gray};
  ${Media.MD} {
    margin-bottom: 170px;
  }
  ${Media.SM} {
    width: 100%;
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
