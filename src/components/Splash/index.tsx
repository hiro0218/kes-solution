import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import LogoSVG from '@/assets/logo.svg';

export const Splash = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add('fade-out');
      ref.current?.setAttribute('aria-hidden', 'true');
    }, 500);
  }, []);

  return (
    <Container ref={ref}>
      <LogoSVG alt="株式会社KESソリューション" height="" width="280" />
    </Container>
  );
};

const fadeout = keyframes`
  from {
    opacity: 1;
  }

  to {
    z-index: -1;
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #fff;

  &.fade-out {
    animation: ${fadeout} 1s ease-in-out forwards;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
