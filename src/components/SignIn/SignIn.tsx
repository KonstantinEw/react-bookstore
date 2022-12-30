import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "components";
import { useForm } from "react-hook-form";
import { BodyForm, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { setUser } from "store";
import { useDispatch } from "react-redux";

interface ISingIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useDispatch();
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
          }),
        );
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <BodyForm onSubmit={handleSubmit(handleSignIn)}>
      <InputWrapper>
        <Label>email</Label>
        <StyledInput
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
      <CustomLink to="/">Foggot password?</CustomLink>
      <Button type="submit">sign in</Button>
    </BodyForm>
  );
};
