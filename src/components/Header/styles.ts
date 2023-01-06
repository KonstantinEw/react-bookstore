import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Margin1, Media } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
  ${Media.LG} {
    display: flex;
    justify-content: space-between;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    width: 100%;
    height: calc(100% - 82px);
    margin-top: 82px;
    padding: 56px 40px;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  }
`;

export { LogoLink, StyledHeader, NavWrapper };
