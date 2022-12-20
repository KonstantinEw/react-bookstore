import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Color, H3, Media } from "ui";

const StyledAuthForm = styled.form`
  width: 544px;
  min-height: 480px;
  margin-bottom: 100px;
  border: 1px solid ${Color.Gray};
  ${Media.MD} {
    margin-bottom: 170px;
  }
  ${Media.SM} {
    width: 100%;
    height: 404px;
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

const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px 32px 32px;
`;

const CustomLink = styled(Link)`
  margin-bottom: 40px;
  ${B1};
  color: ${Color.Primary};
  text-decoration: none;
`;

export { CustomLink, BodyForm, ButtonForm, HeaderForm, StyledAuthForm };
