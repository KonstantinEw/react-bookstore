import { Button, Input } from "components";
import { useState } from "react";
import { BodyForm, ButtonForm, CustomLink, HeaderForm, Label, StyledAuthForm } from "./styles";

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
          <Label>email</Label>
          <Input type="email" placeholder="Your email" />
          <Label>password</Label>
          <Input type="password" placeholder="Your password" />
          <CustomLink to="/">Foggot password?</CustomLink>
          <Button type="submit">sign in</Button>
        </BodyForm>
      ) : (
        <BodyForm>
          <Label>name</Label>
          <Input type="text" placeholder="Your password" />
          <Label>email</Label>
          <Input type="email" placeholder="Your email" />
          <Label>password</Label>
          <Input type="password" placeholder="Your password" />
          <Label>confirm password</Label>
          <Input type="password" placeholder="Your password" />
          <Button type="submit">sign on</Button>
        </BodyForm>
      )}
    </StyledAuthForm>
  );
};
