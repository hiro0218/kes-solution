import styled from '@emotion/styled';
import Link from 'next/link';
import LogoSVG from '@/assets/logo.svg';

import { gray } from '@radix-ui/colors';

export const Footer = () => {
  return (
    <Container>
      <TermLinkList>
        <ul>
          <li>
            <Link href="/">トップ</Link>
          </li>
          <li>
            <Link href="/message">代表挨拶</Link>
          </li>
          <li>
            <Link href="/security">情報セキュリティ基本方針</Link>
          </li>
        </ul>
      </TermLinkList>
      <CompanyInfo>
        <LogoSVG width="60" />
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
  background-color: ${gray.gray11};
  color: ${gray.gray2};

  a {
    font-size: 0.9rem;
    color: ${gray.gray2};
  }

  svg path {
    fill: ${gray.gray2};
  }

  small {
    font-size: 0.9rem;
    color: ${gray.gray7};
  }
`;

const TermLinkList = styled.nav`
  padding: 1.75rem 0;
  font-weight: 700;
  text-align: left;

  ul {
    display: flex;

    > * + * {
      margin-left: 2rem;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
  font-size: 0.85rem;
`;
