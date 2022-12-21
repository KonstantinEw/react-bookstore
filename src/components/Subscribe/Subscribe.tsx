import axios from "axios";
import { Button } from "components";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import {
  ErrorMessage,
  Form,
  InputField,
  StyledSubscribe,
  SubTitle,
  SuccessTitle,
  Title,
} from "./styles";

interface ISubmitEmail {
  email: string;
}

export const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ISubmitEmail) => {
    await axios.post("https://63a188b1ba35b96522e0a96d.mockapi.io/subscribers", {
      email: data.email,
    });
    reset();
  };

  return (
    <StyledSubscribe>
      {isSubmitSuccessful ? (
        <SuccessTitle>
          Successfully! <FaCheck />
        </SuccessTitle>
      ) : (
        <>
          <Title>Subscribe to Newsletter</Title>
          <SubTitle>
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
          </SubTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              autoComplete="off"
              {...register("email", {
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Enter the correct email!",
                },
                required: "Email is required field!",
              })}
              placeholder="Enter email..."
              type="text"
            />
            <Button type="submit">subscribe</Button>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </Form>
        </>
      )}
    </StyledSubscribe>
  );
};
