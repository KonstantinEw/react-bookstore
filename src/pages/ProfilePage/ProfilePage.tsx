import { ArrowBackButton, Profile, Title } from "components";
import { getAuth, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { getUser, setUser, useAppDispatch, useAppSelector } from "store";
import { IUserData } from "types";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const { name, email } = useAppSelector(getUser);

  const handleUserProfile = (userData: IUserData) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      updatePassword(user, userData.newPassword).then(() => {
        updateEmail(user, userData.email).then(() => {
          updateProfile(user, {
            displayName: userData.name,
          })
            .then(() => {
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                }),
              );
            })
            .catch((error) => {
              alert(error.message);
            });
        });
      });
    }
  };
  return (
    <section>
      <ArrowBackButton />
      <Title>account</Title>
      <Profile name={name} email={email} handleUserProfile={handleUserProfile} />
    </section>
  );
};
