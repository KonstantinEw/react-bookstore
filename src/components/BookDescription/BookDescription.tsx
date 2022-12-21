import { ArrowBack, Button, DescriptionTabs, DiscriptionList, Title } from "components";
import { IResponseBook } from "types";
import { BookDetails, DescrWrap, ImageWrap, Image } from "./styles";

interface IProps {
  result: IResponseBook;
}

export const BookDescription = ({ result }: IProps) => {
  const { title, image } = result;

  return (
    <div>
      <ArrowBack />
      <Title>{title}</Title>
      <BookDetails>
        <ImageWrap>
          <Image src={image} alt={title} />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList result={result} />
          <Button>add to card</Button>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs result={result} />
    </div>
  );
};
