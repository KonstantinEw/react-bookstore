import { Button, Input } from "components";
import { useState } from "react";
import { BodyForm, ButtonForm, CustomLink, HeaderForm, StyledAuthForm } from "./styles";

export const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignOn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsSignIn(true);
  };

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsSignIn(false);
  };

  return (
    <StyledAuthForm action="">
      <HeaderForm>
        <ButtonForm activeBorder={isSignIn} activeColor={isSignIn} onClick={handleSignOn}>
          Sign in
        </ButtonForm>
        <ButtonForm activeBorder={!isSignIn} activeColor={!isSignIn} onClick={handleSignIn}>
          Sign on
        </ButtonForm>
      </HeaderForm>
      {isSignIn ? (
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
      ) : (
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
      )}
    </StyledAuthForm>
  );
};
