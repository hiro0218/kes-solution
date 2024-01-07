import { useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gray } from '@radix-ui/colors';

export const Header = () => {
  const refHeader = useRef<HTMLElement>(null);
  const refHamburger = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onClickAnchor = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const href = (e.target as HTMLAnchorElement).getAttribute('href');

      if (!href) return;

      const hash = href.split('#')[1];

      // index.tsx以外の場合はrouter.pushを実行する
      if (location.pathname !== '/') {
        await new Promise((resolve) => {
          resolve(router.push(`/#${hash}`));
        });
      }

      const element = document.querySelector<HTMLAnchorElement>(`#${hash}`);

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const offset = window.scrollY;
      const padding = refHeader.current?.clientHeight || 0;
      const targetY = rect.top + offset - padding;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });

      closeExpanded();
    },
    [router]
  );

  function toggleExpanded() {
    if (!refHamburger.current) return;
    refHamburger.current.dataset.expanded = refHamburger.current.dataset.expanded === 'true' ? 'false' : 'true';
  }

  function closeExpanded() {
    if (!refHamburger.current) return;
    refHamburger.current.dataset.expanded = 'false';
  }

  return (
    <Root ref={refHeader}>
      <Logo>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="株式会社KESソリューション" width="80" />
        </Link>
      </Logo>
      <Hamburger
        type="button"
        aria-label="hamburger button"
        ref={refHamburger}
        data-expanded="false"
        onClick={toggleExpanded}
      >
        <div className="hamburgerButton">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Hamburger>
      <Navigation>
        <ul>
          <li>
            <Link href="/#philosophy" onClick={onClickAnchor}>
              経営理念
            </Link>
          </li>
          <li>
            <Link href="/#business-overview" onClick={onClickAnchor}>
              事業概要
            </Link>
          </li>
          <li>
            <Link href="/#company-overview" onClick={onClickAnchor}>
              会社概要
            </Link>
          </li>
        </ul>
      </Navigation>
    </Root>
  );
};

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 0 64px;
  background-color: #fff;
  border-bottom: 1px solid ${gray.gray6};

  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  a {
    display: flex;
    height: 100%;
  }
`;

const Navigation = styled.nav`
  height: 100%;
  transition: transform 0.2s ease;
  will-change: transform;

  @media screen and (max-width: 767px) {
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: -1;
    transform: translateY(calc(-100% + 6rem));
    border-bottom: 1px solid ${gray.gray6};
    height: auto;

    // button[data-expanded='true']
    [data-expanded='true'] + & {
      top: 6rem;
      right: 0;
      left: 0;
      opacity: 1;
      transform: translateY(0);
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    height: 100%;

    @media screen and (max-width: 767px) {
      display: block;
      background-color: #fff;
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.75rem 1rem;
    font-weight: 700;
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;

    @media screen and (max-width: 767px) {
      padding: 1rem 1rem;
      justify-content: center;
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      content: '';
      border-bottom: 4px solid #da532c;
      transition: width 0.2s ease;
    }

    &:hover {
      color: #da532c;

      &::before {
        width: 100%;
      }
    }
  }
`;

const Hamburger = styled.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and not (max-width: 767px) {
    display: none;
  }

  .hamburgerButton {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: #da532c;
    border-radius: 5px;

    span {
      position: absolute;
      left: 14px;
      display: inline-block;
      width: 45%;
      height: 3px;
      background: #fff;
      border-radius: 2px;
      transition: all 0.4s;

      &:nth-of-type(1) {
        top: 15px;
      }

      &:nth-of-type(2) {
        top: 23px;
      }

      &:nth-of-type(3) {
        top: 31px;
      }
    }
  }

  &[data-expanded='true'] {
    .hamburgerButton span:nth-of-type(1) {
      top: 18px;
      left: 18px;
      width: 30%;
      transform: translateY(6px) rotate(-45deg);
    }

    .hamburgerButton span:nth-of-type(2) {
      opacity: 0;
    }

    .hamburgerButton span:nth-of-type(3) {
      top: 30px;
      left: 18px;
      width: 30%;
      transform: translateY(-6px) rotate(45deg);
    }
  }
`;
