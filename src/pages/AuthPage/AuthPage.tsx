import { SignIn, SignOn } from "components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { fetchRegisterUser, fetchSignIn, useAppDispatch } from "store";
import { ISignOn, ISingIn } from "types";
import { ButtonForm, HeaderForm, StyledAuthForm, StyledAuthPage } from "./styles";

export const AuthPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOn = () => {
    setIsSignIn(true);
  };

  const handleSignIn = () => {
    setIsSignIn(false);
  };

  const handleRegisterUser = (userData: ISignOn) => {
    dispatch(
      fetchRegisterUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    )
      .unwrap()
      .then(() => navigate(ROUTE.HOME))
      .catch(() => setIsOpen(true));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSignInUser = (userData: ISingIn) => {
    dispatch(
      fetchSignIn({
        email: userData.email,
        password: userData.password,
      }),
    )
      .unwrap()
      .then(() => navigate(ROUTE.HOME))
      .catch(() => setIsOpen(true));
  };

  return (
    <StyledAuthPage>
      <StyledAuthForm>
        <HeaderForm>
          <ButtonForm activeBorder={isSignIn} activeColor={isSignIn} onClick={handleSignOn}>
            Sign in
          </ButtonForm>
          <ButtonForm activeBorder={!isSignIn} activeColor={!isSignIn} onClick={handleSignIn}>
            Sign on
          </ButtonForm>
        </HeaderForm>
        {isSignIn ? (
          <SignIn
            handleSignInUser={handleSignInUser}
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
          />
        ) : (
          <SignOn
            handleRegisterUser={handleRegisterUser}
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
          />
        )}
      </StyledAuthForm>
    </StyledAuthPage>
  );
};
