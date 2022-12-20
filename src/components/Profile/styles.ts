import styled from "styled-components";
import { Color, H3, Margin1, Margin2, Margin4, Margin7 } from "ui";

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin2.desktop};
`;

const Subtitle = styled.h3`
  margin-bottom: ${Margin7.desktop};
  ${H3}
  color: ${Color.Primary};
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: end;
  margin-bottom: ${Margin1.desktop};
`;

export { ButtonWrapper, Subtitle, ProfileInfo };
