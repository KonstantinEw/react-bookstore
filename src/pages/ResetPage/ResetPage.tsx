import { Button, Loader, Modal } from "components";
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
import { fetchResetPassword, getUser, useAppDispatch, useAppSelector } from "store";
import { useState } from "react";

interface IReset {
  email: string;
}

export const ResetPage = () => {
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenErrorModal, setIsErrorOpenModal] = useState(false);
  const { error, isLoading } = useAppSelector(getUser);
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
        setIsOpenModal(true);
      })
      .catch(() => {
        setIsErrorOpenModal(true);
      });
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleCloseErrorModal = () => {
    setIsErrorOpenModal(false);
  };

  return (
    <StyledFoggotPassPage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {isOpenErrorModal && (
        <Modal onClick={handleCloseErrorModal} textButton="Ok">
          {error ? error : "Unknown Error"}
        </Modal>
      )}
      {isOpenModal && (
        <Modal onClick={handleCloseModal} textButton="Ok">
          Password reset email sent!
        </Modal>
      )}
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </StyledFoggotPassPage>
  );
};
