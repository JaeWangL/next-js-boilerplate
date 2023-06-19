import type { InputOnChangeData } from '@fluentui/react-components';
import di from '@presentation/di';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import type { HomeLogicTypes } from './types';

export function useHomeLogics(): HomeLogicTypes {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, data: InputOnChangeData): void => {
      setEmail(data.value);
    },
    []
  );

  const onPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, data: InputOnChangeData): void => {
      setPassword(data.value);
    },
    []
  );

  const onSignInClick = useCallback(async (): Promise<void> => {
    const loggedUser = await di.auth.signIn({
      email,
      password,
      rememberEmail: true,
    });
    if (loggedUser) {
      toast('Sign In Completed');
    }
  }, [email, password]);

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSignInClick,
  };
}
