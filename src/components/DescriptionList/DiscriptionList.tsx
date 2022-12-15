import { CostRow, DescrItem, DescrList, DescrText, ListText } from "./styles";

export const DiscriptionList = () => {
  return (
    <DescrList>
      <CostRow>
        <span>43$</span>
        <span>aaaaa</span>
      </CostRow>
      <DescrItem>
        <ListText>Authors:</ListText>
        <DescrText>asdasd</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Publisher:</ListText>
        <DescrText>asdasdasd</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Language:</ListText>
        <DescrText>dasdasd</DescrText>
      </DescrItem>
      <DescrItem>
        <ListText>Year:</ListText>
        <DescrText>asdasd</DescrText>
      </DescrItem>
    </DescrList>
  );
};
