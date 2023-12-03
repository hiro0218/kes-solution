import { Head } from 'minista';

import 'shokika.css';

import CompanyOverview from '../components/CompanyOverview';
import BusinessOverview from '../components/BusinessOverview';

export default function () {
  return (
    <>
      <Head>
        <title>株式会社KESソリューション</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <h1>株式会社KESソリューション</h1>
      </header>
      <CompanyOverview />
      <BusinessOverview />
      <footer>
        <p>
          <small>&copy; 株式会社KESソリューション</small>
        </p>
      </footer>
    </>
  );
}
