import styled from "styled-components";
import { Color, H2, Margin1, Media } from "ui";

const StyledFavoritesPage = styled.div`
  margin-bottom: ${Margin1.desktop};
  ${Media.SM} {
    margin-bottom: ${Margin1.mobile};
  }
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${Margin1.desktop};
  ${H2};
  color: ${Color.Primary};
`;

export { EmptyWrapper, StyledFavoritesPage };
