import { Button } from "components";
import { useForm } from "react-hook-form";
import {
  BodyForm,
  ErrorMessage,
  FormWrapper,
  InputWrapper,
  Label,
  StyledFoggotPassPage,
  StyledInput,
  Title,
} from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

interface IReset {
  email: string;
}

export const FoggotPassPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleResetPassword = ({ email }: IReset) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <StyledFoggotPassPage>
      <FormWrapper>
        <Title>Reset password</Title>
        <BodyForm onSubmit={handleSubmit(handleResetPassword)}>
          <InputWrapper>
            <Label>email</Label>
            <StyledInput
              type="text"
              placeholder="Your email"
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
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputWrapper>

          <Button type="submit">reset</Button>
        </BodyForm>
      </FormWrapper>
    </StyledFoggotPassPage>
  );
};
