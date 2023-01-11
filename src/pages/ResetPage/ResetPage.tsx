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
import { fetchResetPassword, useAppDispatch } from "store";

interface IReset {
  email: string;
}

export const ResetPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleResetPassword = (userData: IReset) => {
    dispatch(fetchResetPassword({ email: userData.email }))
      .unwrap()
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
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
