import { useEffect, useRef } from 'react';
import splash from '../../assets/splash.module.scss';

export default function () {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add(splash.fadeOut);
    }, 500);
  }, []);

  return (
    <div ref={ref} className={splash.container}>
      <img src="logo.svg" alt="株式会社KESソリューション" height="" width="280" />
    </div>
  );
}
