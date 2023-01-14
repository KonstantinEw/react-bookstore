import { Button, Portal } from "components";
import { useLockBodyScroll } from "hooks";
import { TargetPortal } from "types";

import { ModalContainer, ModalWrapper, Text } from "./styles";

interface IProps {
  children: string;
  textButton: string;
  onClick: () => void;
}

const modalAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};

export const Modal = ({ children, textButton, onClick }: IProps) => {
  useLockBodyScroll();
  return (
    <Portal target={TargetPortal.MODAL}>
      <ModalWrapper initial={modalAnimation.hidden} whileInView={modalAnimation.visible}>
        <ModalContainer>
          <Text>{children}</Text>
          <Button onClick={onClick}>{textButton}</Button>
        </ModalContainer>
      </ModalWrapper>
    </Portal>
  );
};
