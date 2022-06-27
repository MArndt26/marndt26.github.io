import '../styles/globals.css';
import '../styles/media.css';
import '../styles/sacnite.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
