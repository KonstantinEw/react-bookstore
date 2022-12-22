import { Input, Button } from "components";
import { useForm } from "react-hook-form";
import { BodyForm, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";

interface ISignOn {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignOn = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ISignOn) => {
    console.log(data);
  };

  return (
    <BodyForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>name</Label>
        <StyledInput
          type="text"
          placeholder="Your name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required field!",
            },
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <Label>email</Label>
        <StyledInput
          type="text"
          placeholder="Your email"
          {...register("email", {
            pattern: {
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

      <InputWrapper>
        <Label>password</Label>
        <StyledInput
          type="password"
          placeholder="Your password"
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
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <Label>confirm password</Label>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "This is required field!",
            },
            validate: (value) => {
              return value === watch("password") || "Password does not match";
            },
          })}
        />
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
      </InputWrapper>
      <Button type="submit">sign on</Button>
    </BodyForm>
  );
};
