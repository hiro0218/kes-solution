import header from '../assets/header.module.scss';

export default function () {
  return (
    <header className={header.container}>
      <h1 className={header.logo}>
        <a href="/">
          <img src="logo.svg" alt="株式会社KESソリューション" width="80" />
        </a>
      </h1>
      <nav className={header.navigation}>
        <ul>
          <li>
            <a href="#company-overview">会社概要</a>
          </li>
          <li>
            <a href="#business-overview">事業概要</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
