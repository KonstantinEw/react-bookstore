import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Wrapper>
  );
};
