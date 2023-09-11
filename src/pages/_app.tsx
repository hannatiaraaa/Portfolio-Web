import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const iconId = process.env.NEXT_PUBLIC_FONTAWESOME_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Script src={`https://kit.fontawesome.com/${iconId}.js`} />
      <Component {...pageProps} />
    </main>
  );
}
