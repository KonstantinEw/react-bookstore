import styled from "styled-components";
import { Color, H3 } from "ui";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: grid;
  background-color: ${Color.Background_Modal};
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-self: center;
  padding: 30px;
  width: 400px;
  height: 200px;
  border: 1px solid ${Color.Primary};
  border-radius: 5px;
  text-align: center;
  background: ${Color.Primary_Light};
`;

const Text = styled.h3`
  ${H3};
  color: ${Color.Primary};
`;

export { ModalWrapper, ModalContainer, Text };
