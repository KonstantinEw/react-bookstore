import {
  ArrowBackButton,
  Button,
  DescriptionTabs,
  DiscriptionList,
  Subscribe,
  Title,
} from "components";
import { addOrder, orderBooks, useAppDispatch } from "store";
import { IDetailsBook } from "types";
import { BookDetails, DescrWrap, ImageWrap, Image } from "./styles";

interface IProps {
  book: IDetailsBook;
}

export const BookDescription = ({ book }: IProps) => {
  const { title, image } = book;

  const dispatch = useAppDispatch();
  const handleAddBook = () => {
    dispatch(addOrder(book));
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
          <Button onClick={handleAddBook}>add to card</Button>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs book={book} />
      <Subscribe />
    </div>
  );
};
