import styled from "styled-components";
import { Color, Media } from "ui";

const Container = styled.div`
  flex-grow: 1;
  max-width: 100%;
  padding: 0px 40px 0px 40px;
  background-color: ${Color.Primary_Light};
  ${Media.MD} {
    padding: 0px 25px 0px 25px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 0px 40px 0px 40px;
  background-color: ${Color.Primary_Light};
  ${Media.EL} {
    max-width: 1000px;
  }
  ${Media.LG} {
    max-width: 750px;
  }
  ${Media.MD} {
    max-width: 100%;
    padding: 0px 25px 0px 25px;
  }
`;

export { Container, Wrapper };
