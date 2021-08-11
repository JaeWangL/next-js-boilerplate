import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';
import { PageLoading } from '@/components';
import { wrapper } from '@/redux';
import { globalStyles } from '@/styles/globals';
import { pageviewLog } from '@/utils';

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

const cache = createCache({ key: 'wang' });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  useEffect(() => {
    const handleRouteChangeStart = (): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey + 1,
      }));
    };

    const handleRouteChangeEnd = (url: string): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
      pageviewLog(url);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

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
      <PageLoading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <CacheProvider value={cache}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
