import { ArrowBackButton, Button, Input, Title } from "components";
import { getAuth, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import { useAppSelector } from "store";
import { getUser } from "store/selectors/userSelectors";
import { Color } from "ui";
import {
  ButtonConteiner,
  ButtonWrapper,
  ConfirmPassWrapper,
  NewPassWrapper,
  PassWrapper,
  ProfileInfo,
  Subtitle,
} from "./styles";

export const Profile = () => {
  const { name, email } = useAppSelector(getUser);
  const auth = getAuth();

  return (
    <form>
      <ArrowBackButton />
      <Title>account</Title>
      <Subtitle>profile</Subtitle>
      <ProfileInfo>
        <Input type="text" placeholder="name">
          Name
        </Input>
        <Input type="email" placeholder="email">
          Email
        </Input>
      </ProfileInfo>
      <Subtitle>password</Subtitle>
      <PassWrapper>
        <NewPassWrapper>
          <Input type="password" placeholder="password">
            password
          </Input>
          <Input type="password" placeholder="new password">
            new password
          </Input>
        </NewPassWrapper>

        <ConfirmPassWrapper>
          <Input type="password" placeholder="confirm new password">
            confirm new password
          </Input>
        </ConfirmPassWrapper>
      </PassWrapper>
      <ButtonWrapper>
        <ButtonConteiner>
          <Button>save changes</Button>
          <Button brColor={Color.Primary} buttonColor={Color.Primary} bgColor={Color.Primary_Light}>
            cancel
          </Button>
        </ButtonConteiner>
      </ButtonWrapper>
    </form>
  );
};
