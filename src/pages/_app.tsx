import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import createCache from '@emotion/cache';
import { CacheProvider, Global, Theme, ThemeProvider } from '@emotion/react';
import { wrapper } from '@/redux';
import { globalStyles } from '@/styles/globals';

const theme: Theme = {
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

const cache = createCache({ key: 'wang' });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03103b" />
        <meta name="description" content="Next.JS Boilerplate" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <title>Next-JS-Boilerplate</title>
      </Head>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
