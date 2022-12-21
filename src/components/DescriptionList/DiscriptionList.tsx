import { IResponseBook } from "types";
import { CostRow, DescrItem, DescrList, DescrText, ListText } from "./styles";

interface IProps {
  result: IResponseBook;
}

export const DiscriptionList = ({ result }: IProps) => {
  const { price, rating, authors, pages, publisher, language, year } = result;
  return (
    <DescrList>
      <CostRow>
        <span>{price}</span>
        <span>{rating}</span>
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
    </DescrList>
  );
};
