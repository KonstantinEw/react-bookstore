import { Button } from "components";
import { useForm } from "react-hook-form";
import { Color } from "ui";
import { getAuth, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import {
  ButtonConteiner,
  ButtonWrapper,
  ConfirmPassWrapper,
  ErrorMessage,
  InputWrapper,
  Label,
  NewPassWrapper,
  PassWrapper,
  ProfileInfo,
  StyledInput,
  Subtitle,
} from "./styles";

interface IUserData {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface IProps {
  name: string;
  email: string;
}

export const Profile = ({ email, name }: IProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleCancel = () => {
    reset();
  };

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
              alert("complete");
            })
            .catch((error) => {
              alert(error.message);
            });
        });
      });
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleUserProfile)}>
      <Subtitle>profile</Subtitle>
      <ProfileInfo>
        <InputWrapper>
          <Label>name</Label>
          <StyledInput
            {...register("name", {
              required: {
                value: true,
                message: "Name is required field!",
              },
            })}
            type="text"
            placeholder="Your name"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>email</Label>
          <StyledInput
            {...register("email", {
              pattern: {
                // eslint-disable-next-line
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter the correct email!",
              },
              required: {
                value: true,
                message: "Email is required field!",
              },
            })}
            type="email"
            placeholder="Your email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </InputWrapper>
      </ProfileInfo>
      <Subtitle>Password</Subtitle>
      <PassWrapper>
        <NewPassWrapper>
          <InputWrapper>
            <Label>password</Label>
            <StyledInput
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required field!",
                },
              })}
              type="password"
              placeholder="Password"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <Label>New password</Label>
            <StyledInput
              {...register("newPassword", {
                required: {
                  value: true,
                  message: "Required field!",
                },
              })}
              type="password"
              placeholder="New password"
            />
            <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
          </InputWrapper>
        </NewPassWrapper>

        <ConfirmPassWrapper>
          <InputWrapper>
            <Label>Confirm new password</Label>
            <StyledInput
              {...register("confirmNewPassword", {
                required: {
                  value: true,
                  message: "Required field!",
                },
                validate: (value) => {
                  return value === watch("newPassword") || "Password does not match";
                },
              })}
              type="password"
              placeholder="Confirm new password"
            />
            <ErrorMessage>{errors.confirmNewPassword?.message}</ErrorMessage>
          </InputWrapper>
        </ConfirmPassWrapper>
      </PassWrapper>
      <ButtonWrapper>
        <ButtonConteiner>
          <Button type="submit">save changes</Button>
          <Button
            onClick={handleCancel}
            brColor={Color.Primary}
            buttonColor={Color.Primary}
            bgColor={Color.Primary_Light}
          >
            cancel
          </Button>
        </ButtonConteiner>
      </ButtonWrapper>
    </form>
  );
};
