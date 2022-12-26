import { SignIn, SignOn } from "components";
import { useState } from "react";
import { ButtonForm, HeaderForm, StyledAuthForm } from "./styles";

export const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignOn = () => {
    setIsSignIn(true);
  };

  const handleSignIn = () => {
    setIsSignIn(false);
  };

  return (
    <StyledAuthForm>
      <HeaderForm>
        <ButtonForm activeBorder={isSignIn} activeColor={isSignIn} onClick={handleSignOn}>
          Sign in
        </ButtonForm>
        <ButtonForm activeBorder={!isSignIn} activeColor={!isSignIn} onClick={handleSignIn}>
          Sign on
        </ButtonForm>
      </HeaderForm>
      {isSignIn ? <SignIn /> : <SignOn />}
    </StyledAuthForm>
  );
};
