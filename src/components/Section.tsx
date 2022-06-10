import React, { ReactNode } from "react";

import { keyframes, styled } from "lets-style";

interface SectionProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const Section = ({ className, title, children }: SectionProps) => (
  <Container className={className}>
    <Title>{title}</Title>
    {children}
  </Container>
);

const titleAnimation = keyframes`
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled("section")`
  width: 100%;
  margin-bottom: 1rem;
`;

const Title = styled("h2")`
  margin: 0 0 0.5rem 0;
  padding: 0;

  transform: translateX(-1rem);
  opacity: 0;
  animation: 2s ${titleAnimation} forwards;
`;

export default Section;
