import {
  ArrowBackButton,
  Button,
  DescriptionTabs,
  DiscriptionList,
  Subscribe,
  Title,
} from "components";
import { IDetailsBook } from "types";
import { BookDetails, DescrWrap, ImageWrap, Image } from "./styles";

interface IProps {
  book: IDetailsBook;
}

export const BookDescription = ({ book }: IProps) => {
  const { title, image } = book;

  return (
    <div>
      <ArrowBackButton />
      <Title>{title}</Title>
      <BookDetails>
        <ImageWrap>
          <Image src={image} alt={title} />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList book={book} />
          <Button>add to card</Button>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs book={book} />
      <Subscribe />
    </div>
  );
};
