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
  quantity: number;
  isAdd: boolean;
  addOrder: () => void;
}

export const BookDescription = ({ addOrder, book, isAdd }: IProps) => {
  const { title, image } = book;

  const handleAddBook = () => {
    addOrder();
  };

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
          <Button onClick={handleAddBook}>add to cart</Button>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs book={book} />
      <Subscribe />
    </div>
  );
};
