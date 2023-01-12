import { StyledAddFavoriteIcon } from "assets";
import { ArrowBackButton, Button, DescriptionTabs, DiscriptionList, Title } from "components";
import { NavigateFunction } from "react-router";
import { ROUTE } from "router";
import { IDetailsBook } from "types";
import { BookDetails, DescrWrap, ImageWrap, Image, AddFavoriteButton, RewiewLink } from "./styles";

interface IProps {
  book: IDetailsBook;
  quantity: number;
  isAuth: boolean;
  navigator: NavigateFunction;
  addFavoriteBook: () => void;
  addOrder: () => void;
}

export const BookDescription = ({ addOrder, book, addFavoriteBook, isAuth, navigator }: IProps) => {
  const { title, image, url } = book;

  const handleOrderBook = () => {
    addOrder();
  };
  const handleAddFavoriteBook = () => {
    addFavoriteBook();
  };

  const handleGoAuth = () => {
    navigator(`/${ROUTE.SIGNUP}`);
  };

  return (
    <>
      <ArrowBackButton />
      <Title>{title}</Title>
      <BookDetails>
        <ImageWrap>
          {isAuth && (
            <AddFavoriteButton onClick={handleAddFavoriteBook}>
              <StyledAddFavoriteIcon />
            </AddFavoriteButton>
          )}
          <Image src={image} alt={title} />
        </ImageWrap>
        <DescrWrap>
          <DiscriptionList book={book} />
          {isAuth ? (
            <Button margin={"0px 0px 40px 0px"} onClick={handleOrderBook}>
              add to cart
            </Button>
          ) : (
            <Button margin={"0px 0px 40px 0px"} onClick={handleGoAuth}>
              you need to reigster or sign in for an order
            </Button>
          )}

          <RewiewLink target="_blank" href={url}>
            Prewiew book
          </RewiewLink>
        </DescrWrap>
      </BookDetails>
      <DescriptionTabs book={book} />
    </>
  );
};
