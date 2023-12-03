import { Head } from 'minista';

import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';
import CompanyOverview from '../components/CompanyOverview';
import BusinessOverview from '../components/BusinessOverview';
import Splash from '../components/Splash?ph';

export default function () {
  return (
    <>
      <Head>
        <title>株式会社KESソリューション</title>
      </Head>
      <Splash />
      <TheHeader />
      <main>
        <CompanyOverview />
        <BusinessOverview />
      </main>
      <TheFooter />
    </>
  );
}
