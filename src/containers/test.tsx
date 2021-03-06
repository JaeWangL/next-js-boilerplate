import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { memo, useEffect } from 'react';
import IsEqual from 'react-fast-compare';
import { toast } from 'react-toastify';
import useWebSocket from 'react-use-websocket';
import { useUserStore } from '@/hooks';
import { coinList, marketList } from '@/configs';
import { wsPricesUrl, wsTradesUrl } from '@/services';
import {
  CardContainer,
  Code,
  ContentContainer,
  Description,
  Footer,
  GridContainer,
  LogoContainer,
  MainContainer,
  Title,
} from './styles';

function Test(): JSX.Element {
  const { t } = useTranslation(['common']);
  const { user } = useUserStore();
  /*
  const { readyState } = useWebSocket(wsTradesUrl([marketList.Binance]), {
    onMessage: ({ data }) => console.log(data),
  });
  */
  const { readyState } = useWebSocket(wsPricesUrl([coinList.Bitcoin, coinList.Ethereum]), {
    fromSocketIO: false,
    onMessage: ({ data }) => console.log(data),
  });

  useEffect(() => {
    toast.info(t('common:helloWorldDesc'));
    toast.info(JSON.stringify(user.currentUser));
  }, []);

  return (
    <MainContainer>
      <ContentContainer>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
        <Description>
          Get started by editing <Code>pages/index.js</Code>
        </Description>

        <GridContainer>
          <CardContainer href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </CardContainer>

          <CardContainer href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </CardContainer>

          <CardContainer href="https://github.com/vercel/next.js/tree/master/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </CardContainer>

          {/* eslint-disable max-len */}
          <CardContainer href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </CardContainer>
        </GridContainer>
      </ContentContainer>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <LogoContainer>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </LogoContainer>
        </a>
      </Footer>
    </MainContainer>
  );
}

export default memo(Test, IsEqual);
