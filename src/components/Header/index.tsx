import { useRef } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const refHamburger = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onClickAnchor = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const href = (e.target as HTMLAnchorElement).getAttribute('href');

    if (!href) return;

    const hash = href.split('#')[1];

    // index.tsx以外の場合はrouter.pushを実行する
    if (location.pathname !== '/') {
      router.push(`/#${hash}`);
    }

    const element = document.querySelector<HTMLAnchorElement>(`#${hash}`);

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offset = window.scrollY;
    const padding = 20;
    const targetY = rect.top + offset - padding;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  const toggleExpanded = () => {
    if (!refHamburger.current) return;
    refHamburger.current.dataset.expanded = refHamburger.current.dataset.expanded === 'true' ? 'false' : 'true';
  };

  return (
    <Root>
      <Logo>
        <Link href="./">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="logo.svg" alt="株式会社KESソリューション" width="80" />
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
            <Link href="./#philosophy" onClick={onClickAnchor}>
              経営理念
            </Link>
          </li>
          <li>
            <Link href="./#business-overview" onClick={onClickAnchor}>
              事業概要
            </Link>
          </li>
          <li>
            <Link href="./#company-overview" onClick={onClickAnchor}>
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 0 64px;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  z-index: 1;

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

  @media screen and (max-width: 767px) {
    display: none;

    [data-expanded='true'] + & {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;

      ul {
        flex-direction: column;
        gap: 0;
        height: auto;
        background-color: #fff;
      }

      a {
        justify-content: center;
      }
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    height: 100%;

    @media screen and (max-width: 767px) {
      gap: 0.5rem;
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.75rem 1rem;
    font-weight: 700;
    text-decoration: none;
    color: #333;
    transition: color 0.2s ease;

    &::before {
      position: absolute;
      bottom: 0;
      width: 0;
      content: '';
      border-bottom: 4px solid #da532c;
      transition: width 0.2s ease;
    }

    &::before {
      left: 0%;
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
  border: none;
  background: none;
  padding: 0;

  @media screen and not (max-width: 767px) {
    display: none;
  }

  .hamburgerButton {
    position: relative;
    background: #da532c;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;

    span {
      display: inline-block;
      transition: all 0.4s;
      position: absolute;
      left: 14px;
      height: 3px;
      border-radius: 2px;
      background: #fff;
      width: 45%;

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
      transform: translateY(6px) rotate(-45deg);
      width: 30%;
    }

    .hamburgerButton span:nth-of-type(2) {
      opacity: 0;
    }

    .hamburgerButton span:nth-of-type(3) {
      top: 30px;
      left: 18px;
      transform: translateY(-6px) rotate(45deg);
      width: 30%;
    }
  }
`;
