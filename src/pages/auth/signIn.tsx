import pick from 'lodash/pick';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslations } from 'next-intl';

const SignInPage: NextPage = () => {
  const t = useTranslations('common');

  return <div>{t('ok')}</div>;
};

export default SignInPage;
// @ts-ignore:: Actually NextPage has no `messages`
SignInPage.messages = ['common'];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // @ts-ignore:: Actually NextPage has no `messages`
      messages: pick((await import(`../../messages/${locale}.json`)).default, SignInPage.messages),
    },
  };
};
