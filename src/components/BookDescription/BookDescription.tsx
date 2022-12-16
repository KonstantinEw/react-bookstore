import { Button, DescriptionTabs, DiscriptionList, Title } from "components";
import { BookDetails, DescrWrap, ImageWrap } from "./styles";

export const BookDescription = () => {
  return (
    <div>
      <Title>Book title</Title>
      <BookDetails>
        <ImageWrap>
          <img src="" alt="" />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList />
          <Button>add to card</Button>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs />
    </div>
  );
};
