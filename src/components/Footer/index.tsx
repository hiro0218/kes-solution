import styled from '@emotion/styled';
import Link from 'next/link';

import { gray } from '@radix-ui/colors';

export const Footer = () => {
  return (
    <Container>
      <TermLinkList>
        <ul>
          <li>
            <Link href="/security">情報セキュリティ基本方針</Link>
          </li>
        </ul>
      </TermLinkList>
      <CompanyInfo>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="株式会社KESソリューション" width="60" />
        <p>
          <small>&copy; 株式会社KESソリューション</small>
        </p>
      </CompanyInfo>
    </Container>
  );
};

const Container = styled.footer`
  padding: 64px;
  margin-top: 2rem;
  text-align: center;
  background-color: ${gray.gray2};

  a {
    font-size: 0.9rem;
  }

  small {
    font-size: 1rem;
  }
`;

const TermLinkList = styled.nav`
  padding: 1.75rem 0;
  font-weight: 700;
  text-align: left;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
`;
