import styled from "styled-components";

const Spinner = styled.div`
  place-self: center;
  width: 25px;
  height: 25px;
  margin: 20px auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left: 4px solid #000;
  border-right: 4px solid #000;
  animation: spinner 1s linear infinite forwards;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerWrapper = styled.div`
  display: grid;
  height: 100vh;
`;

export { SpinnerWrapper, Spinner };
