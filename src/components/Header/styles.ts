import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { B1, Color, Margin1, Media } from "ui";

const StyledHeader = styled.header<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
  ${Media.LG} {
    position: ${({ isOpen }) => (isOpen ? "fixed" : "static")};
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 30px 0px 30px;
    margin-bottom: ${Margin1.mobile};
    background-color: ${Color.Primary_Light};
  }
  ${Media.MD} {
    padding: 10px 10px 0px 10px;
  }
`;

const LogoLink = styled(NavLink)`
  padding: 14px 0px 14px 0px;
`;

const ErrorText = styled.p`
  ${B1};
  color: ${Color.Red};
`;

const NavWrapper = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 105px;
  background-color: ${Color.Primary_Light};
  ${Media.LG} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 60px;
    padding: 56px 40px;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  }
`;

export { LogoLink, StyledHeader, NavWrapper, ErrorText };
