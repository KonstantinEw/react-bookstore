import { Input, Button } from "components";
import { BodyForm, CustomLink } from "./styles";

export const SignIn = () => {
  return (
    <BodyForm>
      <Input type="email" placeholder="Your email">
        email
      </Input>
      <Input type="password" placeholder="Your password">
        password
      </Input>
      <CustomLink to="/">Foggot password?</CustomLink>
      <Button type="submit">sign in</Button>
    </BodyForm>
  );
};
