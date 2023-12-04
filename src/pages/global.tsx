import type { GlobalProps } from 'minista';
import { Head } from 'minista';

import 'shokika.css';
import '../assets/global.scss';

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
