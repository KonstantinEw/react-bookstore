import { ArrowBackButton, Loader, Profile, Title } from "components";
import { useState } from "react";
import { fetchUpdateUser, getUser, useAppDispatch, useAppSelector } from "store";
import { IUserData } from "types";
import { StyledProfilePage } from "./styles";

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  const { name, email, error, isLoading } = useAppSelector(getUser);
  const handleUpdateUser = (userData: IUserData) => {
    dispatch(
      fetchUpdateUser({
        name: userData.name,
        email: userData.email,
        password: userData.newPassword,
      }),
    )
      .unwrap()
      .then(() => setIsOpen(true))
      .catch(() => {
        setIsError(true);
      });
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCloseModalError = () => {
    setIsError(false);
  };

  return (
    <StyledProfilePage>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ArrowBackButton />
      <Title>account</Title>
      <Profile
        name={name}
        email={email}
        error={error}
        handleUpdateUser={handleUpdateUser}
        isOpen={isOpen}
        isError={isError}
        handleCloseModal={handleCloseModal}
        handleCloseModalError={handleCloseModalError}
      />
    </StyledProfilePage>
  );
};
