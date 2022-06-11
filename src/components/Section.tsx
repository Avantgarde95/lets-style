import { keyframes, styled } from "lets-style";

const Section = styled("section")`
  width: 100%;
  margin-bottom: 1rem;
`;

const titleAnimation = keyframes`
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Title = styled("h2")`
  margin: 0 0 0.5rem 0;
  padding: 0;

  transform: translateX(-1rem);
  opacity: 0;
  animation: 1.5s ${titleAnimation} forwards;
`;

export default Object.assign(Section, {
  Title,
});
