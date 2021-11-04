import { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PageLoading } from '@/components';
import { wrapper } from '@/redux';
import { defaultTheme, globalStyles } from '@/styles';
import { createEmotionCache, pageviewLog } from '@/utils';
import 'react-toastify/dist/ReactToastify.css';

interface IMyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

function MyApp(props: IMyAppProps): JSX.Element {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
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
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03103b" />
        <meta name="description" content="Next.JS Boilerplate" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <title>Next-JS-Boilerplate</title>
      </Head>
      <PageLoading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <ThemeProvider theme={defaultTheme}>
        <Global styles={globalStyles} />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover={false}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  const { id, name, label, value } = metric;

  // @ts-ignore
  window.gtag('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

export default wrapper.withRedux(appWithTranslation(MyApp));
