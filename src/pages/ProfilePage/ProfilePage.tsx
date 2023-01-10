import { ArrowBackButton, Profile, Title } from "components";
import { useState } from "react";
import { fetchUpdateUser, getUser, useAppDispatch, useAppSelector } from "store";
import { IUserData } from "types";

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { name, email } = useAppSelector(getUser);

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
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <ArrowBackButton />
      <Title>account</Title>
      <Profile
        name={name}
        email={email}
        handleUpdateUser={handleUpdateUser}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};
