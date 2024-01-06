import styled from '@emotion/styled';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Container>
      <div>
        <Link href="/security">情報セキュリティ基本方針</Link>
      </div>
      <p>
        <small>&copy; 株式会社KESソリューション</small>
      </p>
    </Container>
  );
};

const Container = styled.footer`
  padding-top: 64px;
  padding-bottom: 64px;
  margin-top: 2rem;

  a {
    font-size: 0.9rem;
  }

  small {
    font-size: 1rem;
  }
`;
