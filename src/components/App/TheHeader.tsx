import { MouseEventHandler, useEffect, useRef } from 'react';
import header from '../../assets/header.module.scss';

export default function () {
  const refs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const onClickAnchor = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const href = (e.target as HTMLAnchorElement).getAttribute('href');

    if (!refs.current.has(href)) {
      const element = document.querySelector<HTMLAnchorElement>(href);
      if (!element) return;
      refs.current.set(href, element);
    }

    const element = refs.current.get(href);
    const rect = element.getBoundingClientRect();
    const offset = window.scrollY;
    const padding = 20;
    const targetY = rect.top + offset - padding;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  return (
    <header className={header.container}>
      <h1 className={header.logo}>
        <a href="./">
          <img src="logo.svg" alt="株式会社KESソリューション" width="80" />
        </a>
      </h1>
      <nav className={header.navigation}>
        <ul>
          <li>
            <a href="#philosophy" onClick={onClickAnchor}>
              経営理念
            </a>
          </li>
          <li>
            <a href="#company-overview" onClick={onClickAnchor}>
              会社概要
            </a>
          </li>
          <li>
            <a href="#business-overview" onClick={onClickAnchor}>
              事業概要
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
