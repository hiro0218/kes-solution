import Head from 'next/head';

import { BusinessOverview } from '@/components/Home/BusinessOverview';
import { CompanyOverview } from '@/components/Home/CompanyOverview';
import { Philosophy } from '@/components/Home/Philosophy';
import { MainContainer } from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
      </Head>
      <MainContainer>
        <Philosophy />
        <BusinessOverview />
        <CompanyOverview />
      </MainContainer>
    </>
  );
}
