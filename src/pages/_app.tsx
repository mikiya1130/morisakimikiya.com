import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Theme from '@/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
