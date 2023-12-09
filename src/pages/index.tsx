import { Head } from 'minista';

import TheHeader from '../components/App/TheHeader';
import TheFooter from '../components/App/TheFooter';
import Philosophy from '../components/Philosophy';
import CompanyOverview from '../components/CompanyOverview';
import BusinessOverview from '../components/BusinessOverview';
import Splash from '../components/App/Splash?ph';

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
        <meta property="og:title" content="株式会社KESソリューション" />
        <meta property="og:site_name" content="株式会社KESソリューション" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Splash />
      <TheHeader />
      <main>
        <Philosophy />
        <CompanyOverview />
        <BusinessOverview />
      </main>
      <TheFooter />
    </>
  );
}
