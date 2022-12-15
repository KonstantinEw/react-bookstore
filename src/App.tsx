import {
  NewBooks,
  Footer,
  Header,
  Subscribe,
  BookDescription,
  BookSlider,
} from "components";
import { Wrapper } from "ui";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      {/* <NewBooks />
      <Subscribe /> */}
      <BookDescription />
      <Subscribe />
      <BookSlider />
      <Footer />
    </Wrapper>
  );
};
