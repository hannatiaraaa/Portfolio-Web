import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { inter } from 'configs/fonts';

const iconId = process.env.NEXT_PUBLIC_FONTAWESOME_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Script src={`https://kit.fontawesome.com/${iconId}.js`} />
      <Component {...pageProps} />
    </main>
  );
}
