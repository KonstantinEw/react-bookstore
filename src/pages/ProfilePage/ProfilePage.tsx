import { ArrowBackButton, Profile, Title } from "components";
import { getUser, useAppSelector } from "store";

export const ProfilePage = () => {
  const { name, email } = useAppSelector(getUser);
  return (
    <section>
      <ArrowBackButton />
      <Title>account</Title>
      <Profile name={name} email={email} />
    </section>
  );
};
