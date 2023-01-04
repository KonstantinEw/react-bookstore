import { Button } from "components";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { setUser, useAppDispatch } from "store";
import { BodyForm, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";

interface ISignOn {
  email: string;
  password: string;
  name: string;
}

export const SignOn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignIn = (userData: ISignOn) => {
    const { email, password, name } = userData;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          setUser({
            email: email,
            name: name,
            isAuth: true,
          }),
        );
      })
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: name,
          });
        }
      })
      .then(() => {
        navigate(ROUTE.HOME);
      })
      .catch(() => alert("User existing!"));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <BodyForm onSubmit={handleSubmit(handleSignIn)}>
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
