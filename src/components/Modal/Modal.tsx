import { Button, Portal } from "components";
import { useLockBodyScroll } from "hooks";
import { TargetPortal } from "types";

import { ModalContainer, ModalWrapper, Text } from "./styles";

interface IProps {
  children: string;
  textButton: string;
  onClick: () => void;
}

export const Modal = ({ children, textButton, onClick }: IProps) => {
  useLockBodyScroll();
  return (
    <Portal target={TargetPortal.MODAL}>
      <ModalWrapper>
        <ModalContainer>
          <Text>{children}</Text>
          <Button onClick={onClick}>{textButton}</Button>
        </ModalContainer>
      </ModalWrapper>
    </Portal>
  );
};
