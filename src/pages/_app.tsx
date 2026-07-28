import type { AppProps } from 'next/app';
import '@fontsource/sriracha';
import '@fontsource/noto-sans-jp';
import '@/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
