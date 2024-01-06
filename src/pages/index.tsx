import Head from 'next/head';

import { BusinessOverview } from '@/components/Home/BusinessOverview';
import { CompanyOverview } from '@/components/Home/CompanyOverview';
import { Philosophy } from '@/components/Home/Philosophy';

export default function Home() {
  return (
    <>
      <Head>
        <title>株式会社KESソリューション</title>
      </Head>
      <main>
        <Philosophy />
        <BusinessOverview />
        <CompanyOverview />
      </main>
    </>
  );
}
