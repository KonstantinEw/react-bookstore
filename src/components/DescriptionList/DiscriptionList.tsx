import { IResponseBook } from "types";
import { CostRow, DescrItem, DescrList, DescrText, ListText } from "./styles";
import StarsRating from "react-star-rate";
import { useState } from "react";
import { Color } from "ui";

interface IProps {
  result: IResponseBook;
}

export const DiscriptionList = ({ result }: IProps) => {
  const { price, rating, authors, pages, publisher, language, year } = result;
  const [value] = useState(+rating);
  return (
    <DescrList>
      <CostRow>
        <span>{price}</span>
        <StarsRating value={value} disabled={true} />
      </CostRow>
      <DescrItem>
        <ListText>Authors:</ListText>
        <DescrText>{authors}</DescrText>
      </DescrItem>
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
    </DescrList>
  );
};
