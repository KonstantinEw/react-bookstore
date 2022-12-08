import { Form, InputField, StyledSubscribe, SubTitle, Title } from "./styles";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Title>Subscribe to Newsletter</Title>
      <SubTitle>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </SubTitle>
      <Form>
        <InputField type="email" />
        <input type="submit" />
      </Form>
    </StyledSubscribe>
  );
};
