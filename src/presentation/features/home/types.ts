import type { InputOnChangeData } from '@fluentui/react-components';
import type { ChangeEvent } from 'react';

export type HomeLogicTypes = {
  email: string;
  password: string;
  onEmailChange: (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  onPasswordChange: (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  onSignInClick: () => Promise<void>;
};
