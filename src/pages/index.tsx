import { Head } from 'minista';

import CompanyOverview from '../components/CompanyOverview';
import BusinessOverview from '../components/BusinessOverview';

export default function () {
  return (
    <>
      <Head>
        <title>株式会社KESソリューション</title>
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
