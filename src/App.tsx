import { BooksList, Footer, Header, Subscribe } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <BooksList />
      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
