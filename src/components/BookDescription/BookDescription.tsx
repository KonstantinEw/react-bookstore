import { AddFavoriteIcon } from "assets";
import {
  ArrowBackButton,
  Button,
  DescriptionTabs,
  DiscriptionList,
  Subscribe,
  Title,
} from "components";
import { IDetailsBook } from "types";
import { BookDetails, DescrWrap, ImageWrap, Image, AddFavoriteButton, RewiewLink } from "./styles";

interface IProps {
  book: IDetailsBook;
  quantity: number;
  addFavoriteBook: () => void;
  addOrder: () => void;
}

export const BookDescription = ({ addOrder, book, addFavoriteBook }: IProps) => {
  const { title, image, url } = book;

  const handleAddBook = () => {
    addOrder();
  };
  const handleAddFavoriteBook = () => {
    addFavoriteBook();
  };

  return (
    <div>
      <ArrowBackButton />
      <Title>{title}</Title>
      <BookDetails>
        <ImageWrap>
          <AddFavoriteButton onClick={handleAddFavoriteBook}>
            <AddFavoriteIcon />
          </AddFavoriteButton>
          <Image src={image} alt={title} />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList book={book} />
          <Button margin={"0px 0px 40px 0px"} onClick={handleAddBook}>
            add to cart
          </Button>
          <RewiewLink target="_blank" href={url}>
            Prewiew book
          </RewiewLink>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs book={book} />
      <Subscribe />
    </div>
  );
};
