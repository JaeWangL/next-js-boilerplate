import { notification } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useCallback } from 'react';
import IsEqual from 'react-fast-compare';
import { useWebSocket, useUserStore } from '@/hooks';
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

function Home(): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(['common']);
  const { signIn } = useUserStore();
  const ws = useWebSocket();

  const onTitleClick = useCallback((): void => {
    signIn({ email: '', password: '' });
    notification.info({ message: 'Info', description: 'Dispatch Work' });
    router.push('/test');
  }, []);

  return (
    <MainContainer>
      <ContentContainer>
        <Title onClick={onTitleClick}>
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

export default React.memo(Home, IsEqual);
