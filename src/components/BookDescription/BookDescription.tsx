import { Button, DescriptionTabs, DiscriptionList, Title } from "components";
import { BookDetails, DescrWrap, ImageWrap } from "./styles";

export const BookDescription = () => {
  return (
    <div>
      <Title text="Lorem ipsum"></Title>
      <BookDetails>
        <ImageWrap>
          <img src="" alt="" />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList />
          <Button text={"add to card"} />
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs />
    </div>
  );
};
