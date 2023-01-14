import { StyledTitle } from "./styles";

interface IProps {
  children: string;
}

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const Title = ({ children }: IProps) => {
  return (
    <StyledTitle initial={textAnimation.hidden} whileInView={textAnimation.visible}>
      {children}
    </StyledTitle>
  );
};
