import { NewBooks, Footer, Header, Subscribe } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <NewBooks />
      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
