import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "components";
import { useForm } from "react-hook-form";
import { BodyForm, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { setUser, useAppDispatch } from "store";
import { useNavigate } from "react-router";
import { ROUTE } from "router";

interface ISingIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  const handleSignIn = ({ email, password }: ISingIn) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            isAuth: true,
            name: user.displayName,
          }),
        );
      })
      .then(() => {
        navigate(ROUTE.HOME);
      })
      .catch(() => alert("Invalid user or password!"));
  };

  return (
    <BodyForm onSubmit={handleSubmit(handleSignIn)}>
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
