import '@application/styles/core.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} key={router.asPath} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
