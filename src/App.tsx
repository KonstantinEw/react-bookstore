import {
  NewBooks,
  Footer,
  Header,
  Subscribe,
  BookDescription,
} from "./components";
import { BookSlider } from "./components/BookSlider/BookSlider";
import { Wrapper } from "./ui";

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
