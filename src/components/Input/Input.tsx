import React from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: IProps) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};
