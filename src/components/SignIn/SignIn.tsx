import { Button, Modal } from "components";
import { useForm } from "react-hook-form";
import { BodyForm, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { ROUTE } from "router";
import { ISingIn } from "types";

interface IProps {
  handleSignInUser: (userData: ISingIn) => void;
  handleCloseModal: () => void;
  isOpen: boolean;
}

export const SignIn = ({ handleSignInUser, handleCloseModal, isOpen }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <BodyForm onSubmit={handleSubmit(handleSignInUser)}>
      {isOpen && (
        <Modal onClick={handleCloseModal} textButton="Ok">
          Invalid user or password!
        </Modal>
      )}
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
          type="text"
          placeholder="Your email"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <StyledInput
          {...register("password", {
            required: {
              value: true,
              message: "Password is required field!",
            },
            minLength: {
              value: 6,
              message: "You must enter at least 6 characters!",
            },
          })}
          type="password"
          placeholder="Your password"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </InputWrapper>
      <CustomLink to={ROUTE.RESETPASS}>Forgot password?</CustomLink>
      <Button type="submit">sign in</Button>
    </BodyForm>
  );
};
