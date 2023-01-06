import { IDetailsBook } from "types";
import { CostRow, DescrItem, DescrList, DescrText, ListText } from "./styles";
import StarsRating from "react-star-rate";
import { useState } from "react";

interface IProps {
  book: IDetailsBook;
}

export const DiscriptionList = ({ book }: IProps) => {
  const { price, rating, pages, publisher, language, year, isbn13 } = book;
  const [value] = useState(+rating);
  return (
    <DescrList>
      <CostRow>
        <span>{price}</span>
        <StarsRating value={value} disabled={true} />
      </CostRow>
      <DescrItem>
        <ListText>Publisher:</ListText>
        <DescrText>{publisher}</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Language:</ListText>
        <DescrText>{language}</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Year:</ListText>
        <DescrText>{year}</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Pages:</ListText>
        <DescrText>{pages}</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Isbn13:</ListText>
        <DescrText>{isbn13}</DescrText>
      </DescrItem>
    </DescrList>
  );
};
