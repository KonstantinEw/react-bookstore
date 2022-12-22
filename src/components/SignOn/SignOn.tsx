import { Input, Button } from "components";
import { BodyForm } from "./styles";

export const SignOn = () => {
  return (
    <BodyForm>
      <Input type="text" placeholder="Your name">
        name
      </Input>

      <Input type="email" placeholder="Your email">
        email
      </Input>

      <Input type="password" placeholder="Your password">
        password
      </Input>

      <Input type="password" placeholder="Confirm password">
        confirm password
      </Input>
      <Button type="submit">sign on</Button>
    </BodyForm>
  );
};
