import { StyledTitle } from "./styles";

interface IProps {
  children: string;
}
export const Title = ({ children }: IProps) => {
  return (
    <StyledTitle initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
      {children}
    </StyledTitle>
  );
};
