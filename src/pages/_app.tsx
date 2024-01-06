import 'shokika.css';
import '@/styles/global.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Splash } from '@/components/Splash';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
