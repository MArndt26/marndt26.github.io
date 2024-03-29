import '../styles/globals.css';
import '../styles/media.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
