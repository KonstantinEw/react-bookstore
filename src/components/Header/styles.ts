import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Margin1, Media } from "ui";

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
    padding: 10px 50px 0px 50px;
    margin-bottom: ${Margin1.mobile};
    background-color: ${Color.Primary_Light};
  }
`;

const LogoLink = styled(NavLink)`
  padding: 14px 0px 14px 0px;
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
    gap: 32px;
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 60px;
    padding: 56px 40px;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  }
`;

export { LogoLink, StyledHeader, NavWrapper };
