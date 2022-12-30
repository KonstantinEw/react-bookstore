import styled from "styled-components";
import { Margin1, Media, randomColor } from "../../ui";

const ImageWrap = styled.div`
  position: relative;
  display: grid;
  width: 50%;
  height: 472px;
  background: ${() => randomColor()};
  ${Media.MD} {
    width: 100%;
  }
`;

const Image = styled.img`
  place-self: center;
`;

const DescrWrap = styled.div`
  width: 50%;
  ${Media.MD} {
    width: 100%;
  }
`;

const BookDetails = styled.div`
  display: flex;
  gap: 128px;
  margin-bottom: ${Margin1.desktop};
  ${Media.MD} {
    flex-direction: column;
  }
`;
const AddFavoriteButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export { BookDetails, DescrWrap, ImageWrap, Image, AddFavoriteButton };
