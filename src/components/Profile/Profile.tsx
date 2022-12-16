import { StyledArrow } from "assets";
import { Button, Input, Title } from "components";
import { ROUTE } from "router";
import { Color } from "ui";
import { ButtonWrapper, CustomLink, ProfileInfo, Subtitle } from "./styles";

export const Profile = () => {
  return (
    <form>
      <CustomLink to={ROUTE.HOME}>
        <StyledArrow />
      </CustomLink>
      <Title>account</Title>
      <Subtitle>profile</Subtitle>
      <ProfileInfo>
        <Input type="text" placeholder="name">
          name
        </Input>
        <Input type="email" placeholder="email">
          email
        </Input>
      </ProfileInfo>
      <Subtitle>password</Subtitle>
      <div>
        <Input type="password" placeholder="password">
          password
        </Input>
        <Input type="password" placeholder="new password">
          new password
        </Input>
        <Input type="password" placeholder="confirm new password">
          confirm new password
        </Input>
      </div>
      <ButtonWrapper>
        <Button buttonWidth="227px">save changes</Button>
        <Button
          brColor={Color.Primary}
          buttonColor={Color.Primary}
          bgColor={Color.Primary_Light}
          buttonWidth="227px"
        >
          cancel
        </Button>
      </ButtonWrapper>
    </form>
  );
};
