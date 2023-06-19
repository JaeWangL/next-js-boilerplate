import { Button, Input, Title1 } from '@fluentui/react-components';
import { memo } from 'react';
import { useHomeLogics } from './logics';
import { useHomeStyles } from './styles';

function Home(): JSX.Element {
  const styles = useHomeStyles();
  const { email, password, onEmailChange, onPasswordChange, onSignInClick } =
    useHomeLogics();

  return (
    <div className={styles.wrapper}>
      <Title1>Sign In Test</Title1>
      <Input value={email} onChange={onEmailChange} />
      <Input value={password} onChange={onPasswordChange} />
      <Button appearance="primary" onClick={onSignInClick}>
        Sign In
      </Button>
    </div>
  );
}

export const HomeView = memo(Home);
